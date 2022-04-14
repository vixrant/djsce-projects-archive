import Firebase from "firebase";
import EventEmitter from "EventEmitter";

export default class PeerConnectionStatic {
  static peerConnections = [];
  static createConnection(email, callback) {
    let peerConnection = new PeerConnection();
    this.peerConnections.push(peerConnection);
    peerConnection.connect(
      email,
      callback
    );
    peerConnection.onclose = () => {
      this.peerConnections.filter(p => p.id !== peerConnection.id);
    };
    return peerConnection;
  }
  static getConnection(id) {
    return this.peerConnections.find(p => p.id === id);
  }
}

export class PeerConnection extends EventEmitter {

  constructor() {
    super();
    this.id = new Date().getTime().toString(36);
    this.onclose = function() {};
    this.tracks = [];
  }

  get mediaStream () {
    return new MediaStream(this.tracks);
  }

  connect(email, phone,callback) {
    this.socketConnection = new WebSocket("ws://healthmonitor-signalserver.herokuapp.com");

    this.socketConnection.onopen = ev => {
      console.log("Socket connection opened");
      
      this.socketConnection.send(
        JSON.stringify({
          type: "register",
          from: Firebase.auth().currentUser.email,
          doctor:true,
          phone:phone,
        })
      );

      this.peerConnection = new RTCPeerConnection({
        iceServers: [{ urls: "stun:stun.1.google.com:19302" }]
      });
      this._CreateAndHandleDataChannel();
      // EVENT HANDLERS -----

      this.peerConnection.onicecandidate = ev => {
        console.log(ev.candidate);
        if (!ev.candidate) return;
          this.socketConnection.send(
            JSON.stringify({
              type: "candidate",
              from: Firebase.auth().currentUser.email,
              to: email,
              candidate: ev.candidate
            })
          );
         // this._CreateAndHandleDataChannel();
      };

      this.peerConnection.ontrack = tv => {
        console.log('GOT TRACK ' + tv.track.id);
        this.tracks.push(tv.track);
        this.emit("track", new MediaStream(this.tracks));
      };

      this.peerConnection.ondatachannel = (ev)=>{
          console.log('GOT REMOTE DATA CHANNEL');
          ev.channel.onmessage = (m)=>{
            this.emit('dataChannel',m.data);
          };
      }

      this.peerConnection.onconnectionstatechange = ev => {
        console.log(this.peerConnection.connectionState);
        if (this.peerConnection.connectionState === "connected") {
          console.log("connected");
          if (callback) {
            callback();
          }
        }
      };

      // EVENT HANDLERS -----

      this.peerConnection
        .createOffer({
          offerToReceiveAudio: true,
          offerToReceiveVideo: true,
        })
        .then(offer => {
          this.peerConnection.setLocalDescription(offer).then(() => {
            console.log(offer);
            this.socketConnection.send(
              JSON.stringify({
                type: "offer",
                from: Firebase.auth().currentUser.email,
                to: email,
                offer: offer
              })
            );
          });
        })
        .catch(err => {
          console.log(err);
        });
    
      this.socketConnection.onmessage = ev => {
        let data = JSON.parse(ev.data);

        console.log(ev.data);

        switch (data.type) {
          case "candidate":
            this.peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate));
            break;

          case "answer":
            this.peerConnection.setRemoteDescription(new RTCSessionDescription(data.answer));
            break;
          default:
        }
      };
    };
  }

  closeSocket() {
    this.socketConnection.send(
      JSON.stringify({
        type: "exit",
        from: Firebase.auth().currentUser.email
      })
    );
    this.socketConnection.close();
  }

  closePeerConnection() {
    this.peerConnection.close();
    if (this.onclose) {
      this.onclose();
    }
  }

  _CreateAndHandleDataChannel() {
    this.dataChannel = this.peerConnection.createDataChannel("dataChannel", { reliable: true });
    this.dataChannel.addEventListener("message", ev => {
      //this.emit("dataChannel",ev.data);
    });
  }
  
}
