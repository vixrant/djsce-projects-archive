const express = require("express");
const exphbs  = require('express-handlebars');
const ws = require("ws");
const http = require("http");
const bodyParser = require("body-parser");

const app = express();
const hbs = exphbs.create();
const server = http.createServer(app);


let patientEmail = "nshmadhani@gmail.com";

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static('static'));
app.use(bodyParser.urlencoded({
    extended: true
}));
// -----
var count = 0;
var registration;

// -----

const websocket = new ws.Server({
    server,
});

websocket.broadcast = function broadcast(data) {
    websocket.clients.forEach(function each(client) {
      if (client.readyState === ws.OPEN) {
        client.send(data);
      }
    });
};

// -----

app.get('/', (req, res) => {
    console.log('Got /');
    res.render('index');
});

app.post('/dashboard', (req, res) => {
    registration = req.body;
    patientEmail = registration.email;
    res.render('server', { email: registration.email });
});

// -----
const situation  = require('./service/situation')
const firebase  = require('./service/firebase')
const wsClient = require('./service/ws')
// -----
app.post('/data', (req, res) => {
    const data = req.body; // nodemcu
    console.log(data);
    websocket.broadcast(JSON.stringify(data));
    var problems = situation.guess(data.hr,data.osl,data.bp,data.sl,data.temp);
    console.log(problems);
    if(problems.length !== 0 && (count++) % 5 === 0) {
        


            wsClient.getDoctors()
            .then((doctors) => {
                console.log("Doctors Recvd",doctors);
                doctors.forEach((doctor) => firebase.sendSMS(problems,doctor.phone,patientEmail));
            })

    }
    res.end();
});

// -----

server.listen(8080, '0.0.0.0', () => {
    console.log(`Listening on `, server.address().address, ':', server.address().port);
});
