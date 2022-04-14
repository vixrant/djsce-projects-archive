const knexClient = require('../config/knex');

exports.getAddresses = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM addresses;`);
  return JSON.parse(JSON.stringify(result))[0];
};

exports.getAddressesByPK = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM addresses WHERE user_id = '${args.user_id}';`);
  return JSON.parse(JSON.stringify(result))[0][0];
};

exports.insertAddresses = async (parent, args) => {
  const existingAddresses = await knexClient.raw(`SELECT user_id FROM addresses WHERE user_id = '${args.user_id}';`);

  if(JSON.parse(JSON.stringify(existingAddresses))[0].length !== 0) {
    return `Address already exists`;
  }

  await knexClient.raw(`INSERT INTO addresses VALUES ('${args.user_id}', '${args.address}', '${args.city}', ${args.latitude}, ${args.longitude});`);
  return "New address created successfully";
};

exports.updateAddresses = async (parent, args) => {
  const existingAddresses = await knexClient.raw(`SELECT user_id FROM addresses WHERE user_id = '${args.user_id}';`);

  if(JSON.parse(JSON.stringify(existingAddresses))[0].length === 0) {
    return `Address doesn't exist`;
  }

  await knexClient.raw(`UPDATE addresses SET address = '${args.address}', city = '${args.city}', latitude = ${args.latitude}, longitude = ${args.longitude} WHERE user_id = '${args.user_id}';`);
  return "Address updated successfully";
};

exports.deleteAddresses = async (parent, args) => {
  const existingAddresses = await knexClient.raw(`SELECT user_id FROM addresses WHERE user_id = '${args.user_id}';`);

  if(JSON.parse(JSON.stringify(existingAddresses))[0].length === 0) {
    return `Address doesn't exist`;
  }

  await knexClient.raw(`DELETE FROM addresses WHERE user_id = '${args.user_id}';`);
  return "Address deleted successfully";
};