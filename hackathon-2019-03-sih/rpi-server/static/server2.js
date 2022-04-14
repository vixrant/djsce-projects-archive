let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let videoView = document.querySelector("video");

startButton.onclick = () => {
  serv = new Server();
  console.log("CLICK")
  //document.getElementById("heading").innerHTML = "Your Session is now Live!";
  serv.start();
};
stopButton.onclick = () => {
  document.getElementById("heading").innerHTML = "Your Session Closed";
  serv.stop();
};

// ----

var stream;
async ( async() => {
  stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });
})();

// ----

class Server {

  constructor(id) {
    this.from = id;
    this.peers = [];
    this.socketConnection = new WebSocket(
      "ws://healthmonitor-signalserver.herokuapp.com"
    );
    this.dataConnection = new WebSocket(
      "ws://0.0.0.0:9000"
    );

    this.socketConnection.onopen = () => {
      console.log("Socket connection openned");
      this.socketConnection.send(
        JSON.stringify({
          type: "register",
          from: "a@a",
        })
      );
    };

    this.socketConnection.onmessage = (mv) => {
      console.log("Received data: ", mv.data);
      const data = JSON.parse(mv.data);

      switch (data.type) {
        case "candidate":
          if (data.candidate) {
            const target = this.peers.find(e => e.to === data.to);
            if (target)
              target.addIceCandidate(new RTCIceCandidate(data.candidate));
          }
          break;

        case "offer":
          this.onOffer(data);
          break;

        default:
          console.error(`Unknown type ${data.type}`);
      };
    };
    
    //this.socketConnection.onmessage = console.log;

    this.socketConnection.onerror = (err) => {
      console.error(err);
    };

    this.dataConnection.onopen = () => {
      console.log('Data connection openned');
    };

    this.dataConnection.onmessage = (mv) => {
      const data = mv.data;
      console.log("Received from nodemcu ", mv.data);
      this.broadcast(data);
    };
  }

  broadcast(s) {
    for (let p of this.peers)
      p.dc.send(s);
  }

  async onOffer(data) {
    let pc = new RTCPeerConnection({
      iceServers: [{
        urls: "stun:stun.1.google.com:19302"
      }]
    });

    pc.to = data.from;

    const dc = pc.createDataChannel('dataChannel');
    pc.dc = dc;
    this.peers.push(pc);

    this.sendVideo(pc);

    pc.onicecandidate = (ice) => {
      if (!ice.candidate) return;
      console.log("Received local ICE candidate: ", ice);
      this.socketConnection.send(
        JSON.stringify({
          type: "candidate",
          from: this.from,
          to: pc.to,
          candidate: ice.candidate,
        })
      );
    };

    pc.onconnectionstatechange(() => {
      if (
        pc.connectionState === "closed" ||
        pc.connectionState === "disconnected" ||
        pc.connectionState === "failed"
      )
        this.peers = this.peers.filter(e => e.to !== pc.to);
    })

    await pc.setRemoteDescription(new RTCSessionDescription(data.offer));
    const answer = await this.peerConnection.createAnswer();
    await pc.setLocalDescription(answer);
    this.socketConnection.send(
      JSON.stringify({
        type: "answer",
        from: this.from,
        to: data.user,
        answer: answer
      })
    );

  }

  async sendVideo (peer) {
    for (let t of stream.getTracks())
      peer.addTrack(t);
  }
}

// Server.prototype.createDataChannel = function() {
//   this.dataChannel = this.peerConnection.createDataChannel("dataChannel", { reliable: true });
//   this.dataChannel.onopen = e => {
//     console.log(e.type);
//     this.temperatureInterval = setInterval(() => {
//       let temp = `${Math.round(100 + Math.random() * Math.pow(-1, Math.round(Math.random() * 10)) * 10)}`;
//       this.dataChannel.send(JSON.stringify({ type: "temp", value: temp }));
//     }, 500);
//     this.bloodPressureInterval = setInterval(() => {
//       let bp = `${Math.round(100 + Math.random() * Math.pow(-1, Math.round(Math.random() * 10)) * 10)}/${Math.round(
//         100 + Math.random() * Math.pow(-1, Math.round(Math.random() * 10)) * 10
//       )}`;
//       this.dataChannel.send(JSON.stringify({ type: "bp", value: bp }));
//     }, 2000);
//     this.bloodSugarInterval = setInterval(() => {
//       let bs = `${Math.round(100 + Math.random() * Math.pow(-1, Math.round(Math.random() * 10)) * 10)}`;
//       this.dataChannel.send(
//         JSON.stringify({
//           type: "bs",
//           value: bs
//         })
//       );
//     }, 1000);
//     this.heartRateInterval = setInterval(() => {
//       let hr = `${Math.round(50 + Math.random() * Math.pow(-1, Math.round(Math.random() * 10)) * 10)}`;
//       this.dataChannel.send(
//         JSON.stringify({
//           type: "hr",
//           value: hr
//         })
//       );
//     });
//     this.oxygenSaturationInterval = setInterval(() => {
//       let os = `${Math.round(80 + Math.random() * Math.pow(-1, Math.round(Math.random() * 10)) * 10)}`;
//       this.dataChannel.send(
//         JSON.stringify({
//           type: "os",
//           value: os
//         })
//       );
//     }, 1500);
//   };
//   this.videoStream.getTracks().forEach(t => {
//     this.peerConnection.addTrack(t, this.videoStream);
//   });
// };