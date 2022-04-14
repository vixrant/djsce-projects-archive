const admin = require('firebase-admin');
const functions = require('firebase-functions');

const { parse: json2csv } = require('json2csv');

admin.initializeApp();

exports.ebRegistrations = functions.https.onRequest((request, response) => {
    return admin.firestore().collection("/registrations").get()
        .then((snapshot) => {
            let docs = snapshot.docs.map(d => d.data());
            let fields = Object.keys(docs[1]);
            let r = json2csv(docs, {
                fields
            });

            response.setHeader(
                "Content-disposition",
                "attachment; filename=eb-registrations.csv"
            );
            response.set("Content-Type", "text/csv");
            response.status(200);
            return response.send(r);
        });
});
