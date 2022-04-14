const knexClient = require('../config/knex');

exports.getItemTypes = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM item_types;`);
  return JSON.parse(JSON.stringify(result))[0];
};

exports.getItemTypesByPK = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM item_types WHERE type_id = '${args.type_id}';`);
  return JSON.parse(JSON.stringify(result))[0][0];
};

exports.insertItemTypes = async (parent, args) => {
  const existingItemType = await knexClient.raw(`SELECT type_id FROM item_types WHERE name = '${args.name}';`);

  if(JSON.parse(JSON.stringify(existingItemType))[0].length !== 0) {
    return `Item type already exists`;
  }

  const id = generateRandomUUID();
  await knexClient.raw(`INSERT INTO item_types VALUES ('${id}', '${args.name}', ${args.ironing_price}, ${args.dry_cleaning_price});`);
  return "New item type created successfully";
};

exports.updateItemTypes = async (parent, args) => {
  const existingItemType = await knexClient.raw(`SELECT type_id FROM item_types WHERE type_id = '${args.type_id}';`);

  if(JSON.parse(JSON.stringify(existingItemType))[0].length === 0) {
    return `Item type doesn't exist`;
  }

  await knexClient.raw(`UPDATE item_types SET name = '${args.name}', ironing_price = ${args.ironing_price}, dry_cleaning_price = ${args.dry_cleaning_price} WHERE type_id = '${args.type_id}';`);
  return "Item type updated successfully";
};

exports.deleteItemTypes = async (parent, args) => {
  const existingItemType = await knexClient.raw(`SELECT type_id FROM item_types WHERE type_id = '${args.type_id}';`);

  if(JSON.parse(JSON.stringify(existingItemType))[0].length === 0) {
    return `Item type doesn't exist`;
  }

  await knexClient.raw(`DELETE FROM item_types WHERE type_id = '${args.type_id}';`);
  return "Item type deleted successfully";
};