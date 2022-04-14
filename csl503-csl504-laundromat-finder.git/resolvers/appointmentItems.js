const knexClient = require('../config/knex');

exports.getAppointmentItems = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM appointment_items;`);
  return JSON.parse(JSON.stringify(result))[0];
};

exports.getAppointmentItemsByPK = async (parent, args) => {
  let result;
  if(args.appointment_id && args.item_type_id) {
    result = await knexClient.raw(`SELECT * FROM appointment_items WHERE appointment_id = '${args.appointment_id}' AND item_type_id = '${args.item_type_id}';`);
  } else if(args.appointment_id && !args.item_type_id) {
    result = await knexClient.raw(`SELECT * FROM appointment_items WHERE appointment_id = '${args.appointment_id}';`);
  } else {
    result = await knexClient.raw(`SELECT * FROM appointment_items WHERE item_type_id = '${args.item_type_id}';`);
  }
  return JSON.parse(JSON.stringify(result))[0];
};

exports.insertAppointmentItems = async (parent, args) => {
  const existingAppointmentItem = await knexClient.raw(`SELECT appointment_id FROM appointment_items WHERE appointment_id = '${args.appointment_id}' AND item_type_id = '${args.item_type_id}';`);

  if(JSON.parse(JSON.stringify(existingAppointmentItem))[0].length !== 0) {
    return `Appointment item already exists`;
  }

  await knexClient.raw(`INSERT INTO appointment_items VALUES ('${args.appointment_id}', '${args.item_type_id}', ${args.quantity});`);
  return "New appointment item created successfully";
};

exports.updateAppointmentItems = async (parent, args) => {
  const existingAppointmentItem = await knexClient.raw(`SELECT appointment_id FROM appointment_items WHERE appointment_id = '${args.appointment_id}' AND item_type_id = '${args.item_type_id}';`);

  if(JSON.parse(JSON.stringify(existingAppointmentItem))[0].length === 0) {
    return `Appointment item doesn't exist`;
  }

  await knexClient.raw(`UPDATE appointment_items SET quantity = ${args.quantity} WHERE appointment_id = '${args.appointment_id}' AND item_type_id = '${args.item_type_id}';`);
  return "Appointment item updated successfully";
};

exports.deleteAppointmentItems = async (parent, args) => {
  const existingAppointmentItem = await knexClient.raw(`SELECT appointment_id FROM appointment_items WHERE appointment_id = '${args.appointment_id}' AND item_type_id = '${args.item_type_id}';`);

  if(JSON.parse(JSON.stringify(existingAppointmentItem))[0].length === 0) {
    return `Appointment item doesn't exist`;
  }

  await knexClient.raw(`DELETE FROM appointment_items WHERE appointment_id = '${args.appointment_id}' AND item_type_id = '${args.item_type_id}';`);
  return "Appointment item deleted successfully";
};

exports.appointmentItemsItemTypeRelationship = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM item_types WHERE type_id = '${parent.item_type_id}';`);
  return JSON.parse(JSON.stringify(result))[0][0];
};