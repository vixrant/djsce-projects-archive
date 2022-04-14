<<<<<<< HEAD
var admin = require("firebase-admin");

var serviceAccount = require("./key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://healthmonitor-sih.firebaseio.com"
});


const accountSid = 'AC9168a63b03d64a1659e06cf525daf8e3';
const authToken = '2538e7f4b207f3f652e19b8134ec5372';
const client = require('twilio')(accountSid, authToken);


module.exports.sendSMS = (problems,number,email) => {

    var body = `Your patient ${email} Has the Following Problem(s)\n`
    problems.forEach((text,index) => {
        body += `${index+1} ${text}\n`
    });
    body+="Please Get in Touch Immediately"

    client.messages
        .create({
            body,
            from: '+19363427466',
            to: number
        })
        .then(message => console.log(message.sid))
        .catch(console.log);

=======
var admin = require("firebase-admin");

var serviceAccount = require("./key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://healthmonitor-sih.firebaseio.com"
});


const accountSid = 'AC9168a63b03d64a1659e06cf525daf8e3';
const authToken = '2538e7f4b207f3f652e19b8134ec5372';
const client = require('twilio')(accountSid, authToken);


module.exports.sendSMS = (problems,number,email) => {

    var body = `Your patient ${email} Has the Following Problem(s)\n`
    problems.forEach((text,index) => {
        body += `${index+1} ${text}\n`
    });
    body+="Please Get in Touch Immediately"

    client.messages
        .create({
            body,
            from: '+19363427466',
            to: number
        })
        .then(message => console.log(message.sid))
        .catch(console.log);

>>>>>>> 9743f7ff29913c901690b7ca7b692572afda67cd
}