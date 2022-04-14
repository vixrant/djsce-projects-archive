const knexClient = require('../config/knex');

exports.getAppointments = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM appointments;`);
  return JSON.parse(JSON.stringify(result))[0];
};

exports.getAppointmentsByPK = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM appointments WHERE appointment_id = '${args.appointment_id}';`);
  return JSON.parse(JSON.stringify(result))[0][0];
};

exports.insertAppointments = async (parent, args) => {
  const appointment_id = generateRandomUUID();

  await knexClient.raw(`INSERT INTO appointments (appointment_id, user_id, shop_id, address_id, scheduled_for) VALUES ('${appointment_id}', '${args.user_id}', '${args.shop_id}', '${args.address_id}', '${args.scheduled_for}');`);
  return "New appointment created successfully";
};

exports.updateAppointments = async (parent, args) => {
  const existingAppointment = await knexClient.raw(`SELECT appointment_id FROM appointments WHERE appointment_id = '${args.appointment_id}';`);

  if(JSON.parse(JSON.stringify(existingAppointment))[0].length === 0) {
    return `Appointment doesn't exist`;
  }

  await knexClient.raw(`UPDATE appointments SET scheduled_for = '${args.scheduled_for}' WHERE appointment_id = '${args.appointment_id}';`);
  return "Appointment updated successfully";
};

exports.deleteAppointments = async (parent, args) => {
  const existingAppointments = await knexClient.raw(`SELECT appointment_id FROM appointments WHERE appointment_id = '${args.appointment_id}';`);

  if(JSON.parse(JSON.stringify(existingAppointments))[0].length === 0) {
    return `Appointment doesn't exist`;
  }

  await knexClient.raw(`DELETE FROM appointments WHERE appointment_id = '${args.appointment_id}';`);
  return "Appointment deleted successfully";
};

exports.appointmentsAppointmentItemsRelationship = async (parent, args) => {
  const result = await knexClient.raw(`SELECT * FROM appointment_items WHERE appointment_id = '${parent.appointment_id}';`);
  return JSON.parse(JSON.stringify(result))[0];
};