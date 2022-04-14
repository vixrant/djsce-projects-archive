# Raspberry Pi

In our solution, the Nodemcu-connected sensors send their data to a central Raspberry Pi without the need for an
internet connection. Now the Raspberry Pi will collect all the patient data, store it (for future machine learning),
and transmit the data at low bandwidth using WebRTC data channels.

Also, a webcam attached to the Raspberry Pi will stream its video feed at low bandwidth over the internet using either
Peer-to-peer UDP or TCP (TURN server).

#### Developers

> Vikrant Gajria, Rushabh Shroff, Nishay Madhani

## Screenshots

![setup](/docs/images/pi-setup.jpeg)

_The user interface is similar to how you set-up a WiFi router._
