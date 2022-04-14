# Arogya
##### Smart India Hackathon 2019, Ministry of AYUSH (PSIT, Kanpur)
> Low Bandwidth Health Monitor

Arogya is a low bandwidth health monitoring solution for remote locations. 
The solution uses IOT for data collection from a patient.

![SIH2019](https://img.shields.io/badge/SIH-2019-orange.svg)
[![HitCount](http://hits.dwyl.io/vixrant/sih-19.svg)](http://hits.dwyl.io/vixrant/sih-19)

![app-startup](/docs/images/app-startup.jpeg)
_App screenshot_

![app-ecg](/docs/images/app-ecg.jpeg)
_ECG_

## Build instructions

#### Nodemcu ESP8266:

In `nodemcu/` directory, the `.ino` file can be compiled and uploaded to an ESP8266 chip via Arduino IDE.

#### Raspberry Pi:

1. Install any operating system on a WiFi-compatible Raspberry Pi (We used a model 3B).
2. Set up a WiFi connection and static IP.
3. Install Nodejs.
4. Clone `rpi-server/` directory and install its packages using `npm install` or `yarn install`.
5. Run the start-up script using `npm start` or `yarn start`. For a development server with nodemon
    Run `yarn dev` or `npm run dev`.

#### React Dashboard:

In `healthmonitor-web/` directory install all packages using `npm install` or `yarn install`.

To run the server, `npm start` or `yarn start`.

To build the webpack, `npm run build` or `yarn build`.

## Solution technology Stack

1. Firebase for authentication.
2. Nodemcu with heartrate sensor, Arduino framework for embedded programming.
3. Raspberry Pi with an Expressjs and Websocket server, along with a webcam.
4. Reactjs for website.
5. React Native for mobile.
6. Websockets signalling server on heroku.
7. WebRTC for peer-to-peer connection.

## Developer

> Team 25 (PSIT, Kanpur), Problem Statement SH03, Team Ticca.

It was built by 5 developers in 32 hours (4 hours for judging and prize distribution), from 8AM on March 2 to 4PM on March 3.

> Vikrant Gajria – IOT, WebRTC
> [github.com/vixrant](https://github.com/vixrant)

> Rushabh Shroff – Reactjs, WebRTC
> [github.com/Rushabhshroff](https://github.com/Rushabhshroff)

> Nishay Madhani - IOT
> [github.com/nshmadhani](https://github.com/nshmadhani)

> Yash Javeri - React Native
> [github.com/YashJaveri](https://github.com/YashJaveri)

> Nishant Nimbare - React Native
> [github.com/nishant-nimbare](https://github.com/nishant-nimbare)

## Contributing

1. Fork it (<https://github.com/vixrant/sih-19/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -m 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Failures

> As with all my hackathon projects, I include a [FAILURES.md](/FAILURES.md)
> which includes all the obstacles that I encountered while developing this project.
> This project was successful. 
> But that doesn't mean I ignore the small mistakes that I made along the way.

--------------
APGLv3 LICENSE
--------------

> Copyright (C) 2019 Vikrant Gajria
>
> This program is free software: you can redistribute it and/or modify
> it under the terms of the GNU Affero General Public License as published
> by the Free Software Foundation, either version 3 of the License, or
> (at your option) any later version.
> This program is distributed in the hope that it will be useful,
> but WITHOUT ANY WARRANTY; without even the implied warranty of
> MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
> GNU Affero General Public License for more details.
>
> You should have received a copy of the GNU Affero General Public License
> along with this program.  If not, see <https://www.gnu.org/licenses/>.