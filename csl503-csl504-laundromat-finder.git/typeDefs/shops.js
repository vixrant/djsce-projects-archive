const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
} = require('graphql');

const AddressesType = require('./addresses');
const RatingsType = require('./ratings');
const {
  shopAddressRelationship,
  shopRatingRelationship,
} = require('../resolvers/index');

module.exports = new GraphQLObjectType({
  name: 'Shops',
  fields: {
    user_id: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLNonNull(GraphQLString) },
    address: {
      type: new GraphQLNonNull(AddressesType),
      resolve: (parent, args) => shopAddressRelationship(parent, args),
    },
    rating: {
      type: new GraphQLList(RatingsType),
      resolve: (parent, args) => shopRatingRelationship(parent, args),
    },
  },
});
