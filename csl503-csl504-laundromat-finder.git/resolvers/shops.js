const knexClient = require('../config/knex');

exports.getShops = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM shops;`);
  return JSON.parse(JSON.stringify(result))[0];
};

exports.getShopsByPK = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM shops WHERE user_id = '${args.shop_id}';`);
  return JSON.parse(JSON.stringify(result))[0][0];
};

exports.getShopsNearCustomerAddress = async (parent, args) => {
  const customerAddress = JSON.parse(JSON.stringify(await knexClient.raw(`SELECT latitude, longitude, city from customers WHERE id = '${args.customer_id}'`)))[0][0];

  if(!customerAddress) {
    return [];
  }

  const shopsNearCustomerAddress = await knexClient.raw(`SELECT * FROM (shops INNER JOIN addresses ON shops.user_id = addresses.user_id) WHERE (addresses.latitude BETWEEN ${customerAddress.latitude - 1.0} AND ${customerAddress.latitude + 1.0}) AND (addresses.longitude BETWEEN ${customerAddress.longitude - 1.0} AND ${customerAddress.longitude + 1.0});`);
  const processedShopsNearCustomerAddress = JSON.parse(JSON.stringify(shopsNearCustomerAddress))[0];

  if(processedShopsNearCustomerAddress.length === 0) {
    return [];
  }

  return processedShopsNearCustomerAddress;
};

exports.insertShops = async (parent, args) => {
  const existingShop = await knexClient.raw(`SELECT user_id FROM shops WHERE user_id = '${args.user_id}';`);

  if(JSON.parse(JSON.stringify(existingShop))[0].length !== 0) {
    return `Shop already exists`;
  }

  await knexClient.raw(`INSERT INTO shops VALUES ('${args.user_id}', '${args.name}');`);
  await knexClient.raw(`UPDATE users SET is_shop_owner = true WHERE id = '${args.user_id}';`);
  return "New shop created successfully";
};

exports.updateShops = async (parent, args) => {
  const existingShop = await knexClient.raw(`SELECT user_id FROM shops WHERE user_id = '${args.user_id}';`);

  if(JSON.parse(JSON.stringify(existingShop))[0].length === 0) {
    return `Shop doesn't exist`;
  }

  await knexClient.raw(`UPDATE shops SET name = '${args.name}' WHERE user_id = '${args.user_id}';`);
  return "Shop updated successfully";
};

exports.deleteShops = async (parent, args) => {
  const existingShop = await knexClient.raw(`SELECT user_id FROM shops WHERE user_id = '${args.user_id}';`);

  if(JSON.parse(JSON.stringify(existingShop))[0].length === 0) {
    return `Shop doesn't exist`;
  }

  await knexClient.raw(`DELETE FROM shops WHERE user_id = '${args.user_id}';`);
  await knexClient.raw(`UPDATE users SET is_shop_owner = false WHERE id = '${args.user_id}';`);
  return "Shop deleted successfully";
};

exports.shopAddressRelationship = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM addresses WHERE user_id = '${parent.user_id}';`);
  return JSON.parse(JSON.stringify(result))[0][0];
};

exports.shopRatingRelationship = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM ratings WHERE shop_id = '${parent.user_id}';`);
  return JSON.parse(JSON.stringify(result))[0];
};