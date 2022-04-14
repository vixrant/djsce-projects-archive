const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
} = require('graphql');

const AddressesType = require('./addresses');
const ShopsType = require('./shops');
const {
  userAddressRelationship,
  userShopRelationship,
} = require('../resolvers/index');

module.exports = new GraphQLObjectType({
  name: 'Users',
  fields: {
    id: { type: GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLNonNull(GraphQLString) },
    is_shop_owner: { type: GraphQLNonNull(GraphQLBoolean) },
    shop: {
      type: ShopsType,
      resolve: (parent, args) => userShopRelationship(parent, args),
    },
    address: {
      type: new GraphQLNonNull(AddressesType),
      resolve: (parent, args) => userAddressRelationship(parent, args),
    },
  },
});
