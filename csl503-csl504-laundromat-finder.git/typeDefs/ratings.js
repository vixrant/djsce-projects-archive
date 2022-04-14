const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Ratings',
  fields: {
    user_id: { type: GraphQLNonNull(GraphQLString) },
    shop_id: { type: GraphQLNonNull(GraphQLString) },
    score: { type: GraphQLInt },
    comment: { type: GraphQLString },
  },
});
