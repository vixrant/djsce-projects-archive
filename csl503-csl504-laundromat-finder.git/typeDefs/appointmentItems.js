const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
} = require('graphql');

const ItemTypesType = require('./itemTypes');
const { appointmentItemsItemTypeRelationship } = require('../resolvers/index');

module.exports = new GraphQLObjectType({
  name: 'AppointmentItems',
  fields: {
    appointment_id: { type: GraphQLNonNull(GraphQLString) },
    item_type_id: { type: GraphQLNonNull(GraphQLString) },
    quantity: { type: GraphQLNonNull(GraphQLInt) },
    item_type: {
      type: ItemTypesType,
      resolve: (parent, args) => appointmentItemsItemTypeRelationship(parent, args),
    },
  },
});
