const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull,
} = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Addresses',
  fields: {
    user_id: { type: GraphQLNonNull(GraphQLString) },
    address: { type: GraphQLString },
    city: { type: GraphQLString },
    latitude: { type: GraphQLNonNull(GraphQLFloat) },
    longitude: { type: GraphQLNonNull(GraphQLFloat) },
  },
});
