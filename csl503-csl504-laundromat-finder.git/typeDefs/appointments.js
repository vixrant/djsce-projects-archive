const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');

const AppointmentItemsType = require('./appointmentItems');
const { appointmentsAppointmentItemsRelationship } = require('../resolvers/index');

module.exports = new GraphQLObjectType({
  name: 'Appointments',
  fields: {
    appointment_id: { type: GraphQLNonNull(GraphQLString) },
    user_id: { type: GraphQLNonNull(GraphQLString) },
    shop_id: { type: GraphQLNonNull(GraphQLString) },
    scheduled_for: { type: GraphQLNonNull(GraphQLString) },
    created_at: { type: GraphQLString },
    appointment_items: {
      type: new GraphQLList(AppointmentItemsType),
      resolve: (parent, args) => appointmentsAppointmentItemsRelationship(parent, args),
    },
  },
});
