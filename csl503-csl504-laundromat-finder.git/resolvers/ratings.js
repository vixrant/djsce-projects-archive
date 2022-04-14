const knexClient = require('../config/knex');

exports.getRatings = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM ratings;`);
  return JSON.parse(JSON.stringify(result))[0];
};

exports.getRatingsByPK = async (parent, args) => {
  let result;
  if(args.user_id && args.shop_id) {
    result = await knexClient.raw(`SELECT * FROM ratings WHERE user_id = '${args.user_id}' AND shop_id = '${args.shop_id}';`);
  } else if(args.user_id && !args.shop_id) {
    result = await knexClient.raw(`SELECT * FROM ratings WHERE user_id = '${args.user_id}';`);
  } else {
    result = await knexClient.raw(`SELECT * FROM ratings WHERE shop_id = '${args.shop_id}';`);
  }
  return JSON.parse(JSON.stringify(result))[0];
};

exports.getRatingsAggregateAvg = async (parent, args) => {
  const result = await knexClient.raw(`SELECT AVG(score) FROM ratings WHERE shop_id = '${args.shop_id}';`);
  return JSON.parse(JSON.stringify(result))[0][0]['AVG(score)'];
};

exports.getRatingsAggregateCount = async (parent, args) => {
  const result = await knexClient.raw(`SELECT COUNT(score) FROM ratings WHERE shop_id = '${args.shop_id}';`);
  return JSON.parse(JSON.stringify(result))[0][0]['COUNT(score)'];
};

exports.insertRatings = async (parent, args) => {
  if(args.user_id === args.shop_id) {
    return "Shop owner can't give rating on his/her own shop";
  }

  const existingRating = await knexClient.raw(`SELECT user_id FROM ratings WHERE user_id = '${args.user_id}' AND shop_id = '${args.shop_id}';`);

  if(JSON.parse(JSON.stringify(existingRating))[0].length !== 0) {
    return `Rating already exists`;
  }

  await knexClient.raw(`INSERT INTO ratings VALUES ('${args.shop_id}', '${args.user_id}', ${args.score}, '${args.comment}');`);
  return "New rating created successfully";
};

exports.updateRatings = async (parent, args) => {
  const existingRating = await knexClient.raw(`SELECT user_id FROM ratings WHERE user_id = '${args.user_id}' AND shop_id = '${args.shop_id}';`);

  if(JSON.parse(JSON.stringify(existingRating))[0].length === 0) {
    return `Rating doesn't exist`;
  }

  await knexClient.raw(`UPDATE ratings SET comment = '${args.comment}' AND score = ${args.score} WHERE user_id = '${args.user_id}' AND shop_id = '${args.shop_id}';`);
  return "Rating updated successfully";
};

exports.deleteRatings = async (parent, args) => {
  const existingRating = await knexClient.raw(`SELECT user_id FROM ratings WHERE user_id = '${args.user_id}' AND shop_id = '${args.shop_id}';`);

  if(JSON.parse(JSON.stringify(existingRating))[0].length === 0) {
    return `Shop doesn't exist`;
  }

  await knexClient.raw(`DELETE FROM ratings WHERE user_id = '${args.user_id}' AND shop_id = '${args.shop_id}';`);
  return "Rating deleted successfully";
};