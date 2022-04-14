const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull
} = require('graphql');

const {
  insertAddresses,
  updateAddresses,
  deleteAddresses,

  insertAppointmentItems,
  updateAppointmentItems,
  deleteAppointmentItems,

  insertAppointments,
  updateAppointments,
  deleteAppointments,

  insertItemTypes,
  updateItemTypes,
  deleteItemTypes,

  insertRatings,
  updateRatings,
  deleteRatings,

  insertShops,
  updateShops,
  deleteShops,
  
  updateUsers,
  deleteUsers,
} = require('../resolvers/index');

module.exports = new GraphQLObjectType({
  name: 'RootMutation',
  fields: {
    insert_addresses: {
      type: GraphQLString,
      args: {
        user_id: { type: GraphQLNonNull(GraphQLString) },
        address: { type: GraphQLString },
        city: { type: GraphQLString },
        latitude: { type: GraphQLNonNull(GraphQLFloat) },
        longitude: { type: GraphQLNonNull(GraphQLFloat) },
      },
      resolve: (parent, args) => insertAddresses(parent, args),
    },
    update_addresses: {
      type: GraphQLString,
      args: {
        user_id: { type: GraphQLNonNull(GraphQLString) },
        address: { type: GraphQLString },
        city: { type: GraphQLString },
        latitude: { type: GraphQLFloat },
        longitude: { type: GraphQLFloat },
      },
      resolve: (parent, args) => updateAddresses(parent, args),
    },
    delete_addresses: {
      type: GraphQLString,
      args: {
        user_id: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => deleteAddresses(parent, args),
    },
    insert_appointment_items: {
      type: GraphQLString,
      args: {
        appointment_id: { type: GraphQLNonNull(GraphQLString) },
        item_type_id: { type: GraphQLNonNull(GraphQLString) },
        quantity: { type: GraphQLInt },
      },
      resolve: (parent, args) => insertAppointmentItems(parent, args),
    },
    update_appointment_items: {
      type: GraphQLString,
      args: {
        appointment_id: { type: GraphQLNonNull(GraphQLString) },
        item_type_id: { type: GraphQLNonNull(GraphQLString) },
        quantity: { type: GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, args) => updateAppointmentItems(parent, args),
    },
    delete_appointment_items: {
      type: GraphQLString,
      args: {
        appointment_id: { type: GraphQLNonNull(GraphQLString) },
        item_type_id: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => deleteAppointmentItems(parent, args),
    },
    insert_appointments: {
      type: GraphQLString,
      args: {
        user_id: { type: GraphQLNonNull(GraphQLString) },
        shop_id: { type: GraphQLNonNull(GraphQLString) },
        address_id: { type: GraphQLNonNull(GraphQLString) },
        scheduled_for: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => insertAppointments(parent, args),
    },
    update_appointments: {
      type: GraphQLString,
      args: {
        appointment_id: { type: GraphQLNonNull(GraphQLString) },
        scheduled_for: { type: GraphQLString },
      },
      resolve: (parent, args) => updateAppointments(parent, args),
    },
    delete_appointments: {
      type: GraphQLString,
      args: {
        appointment_id: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => deleteAppointments(parent, args),
    },
    insert_item_types: {
      type: GraphQLString,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        ironing_price: { type: GraphQLFloat },
        dry_cleaning_price: { type: GraphQLFloat },
      },
      resolve: (parent, args) => insertItemTypes(parent, args),
    },
    update_item_types: {
      type: GraphQLString,
      args: {
        type_id: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        ironing_price: { type: GraphQLFloat },
        dry_cleaning_price: { type: GraphQLFloat },
      },
      resolve: (parent, args) => updateItemTypes(parent, args),
    },
    delete_item_types: {
      type: GraphQLString,
      args: {
        type_id: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => deleteItemTypes(parent, args),
    },
    insert_ratings: {
      type: GraphQLString,
      args: {
        user_id: { type: GraphQLNonNull(GraphQLString) },
        shop_id: { type: GraphQLNonNull(GraphQLString) },
        score: { type: GraphQLInt },
        comment: { type: GraphQLString },
      },
      resolve: (parent, args) => insertRatings(parent, args),
    },
    update_ratings: {
      type: GraphQLString,
      args: {
        user_id: { type: GraphQLNonNull(GraphQLString) },
        shop_id: { type: GraphQLNonNull(GraphQLString) },
        score: { type: GraphQLInt },
        comment: { type: GraphQLString },
      },
      resolve: (parent, args) => updateRatings(parent, args),
    },
    delete_ratings: {
      type: GraphQLString,
      args: {
        user_id: { type: GraphQLNonNull(GraphQLString) },
        shop_id: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => deleteRatings(parent, args),
    },
    insert_shops: {
      type: GraphQLString,
      args: {
        user_id: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => insertShops(parent, args),
    },
    update_shops: {
      type: GraphQLString,
      args: {
        user_id: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
      },
      resolve: (parent, args) => updateShops(parent, args),
    },
    delete_shops: {
      type: GraphQLString,
      args: {
        user_id: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => deleteShops(parent, args),
    },
    update_users: {
      type: GraphQLString,
      args: {
        id: { type: GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve: (parent, args) => updateUsers(parent, args),
    },
    delete_users: {
      type: GraphQLString,
      args: {
        id: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => deleteUsers(parent, args),
    },
  },
});
