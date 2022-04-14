let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let videoView = document.querySelector("video");
let serv;

function Server() {}
Server.prototype.connections = [];
Server.prototype.handleCreateChannel = function(peerConnection) {
  let dataChannel = peerConnection.createDataChannel("dataChannel", { reliable: true });
  peerConnection.dc = dataChannel;
  // dataChannel.onopen = e => {
  //   console.log(e.type);
  //   let temperatureInterval = setInterval(() => {
  //     let temp = `${Math.round(100 + Math.random() * Math.pow(-1, Math.round(Math.random() * 10)) * 10)}`;
  //     dataChannel.send(JSON.stringify({ type: "temp", value: temp }));
  //   }, 500);
  //   let bloodPressureInterval = setInterval(() => {
  //     let bp = `${Math.round(100 + Math.random() * Math.pow(-1, Math.round(Math.random() * 10)) * 10)}/${Math.round(
  //       100 + Math.random() * Math.pow(-1, Math.round(Math.random() * 10)) * 10
  //     )}`;
  //     dataChannel.send(JSON.stringify({ type: "bp", value: bp }));
  //   }, 2000);
  //   let bloodSugarInterval = setInterval(() => {
  //     let bs = `${Math.round(100 + Math.random() * Math.pow(-1, Math.round(Math.random() * 10)) * 10)}`;
  //     dataChannel.send(
  //       JSON.stringify({
  //         type: "bs",
  //         value: bs
  //       })
  //     );
  //   }, 1000);
  //   let heartRateInterval = setInterval(() => {
  //     let hr = `${Math.round(50 + Math.random() * Math.pow(-1, Math.round(Math.random() * 10)) * 10)}`;
  //     dataChannel.send(
  //       JSON.stringify({
  //         type: "hr",
  //         value: hr
  //       })
  //     );
  //   });
  //   let oxygenSaturationInterval = setInterval(() => {
  //     let os = `${Math.round(80 + Math.random() * Math.pow(-1, Math.round(Math.random() * 10)) * 10)}`;
  //     dataChannel.send(
  //       JSON.stringify({
  //         type: "os",
  //         value: os
  //       })
  //     );
  //   }, 1500);
  // };
};

Server.prototype.start = function() {
  navigator.mediaDevices.
      getUserMedia({ video: {
          width: 640,
          height: 480,
      } })
    .then(stream => {
      console.log("Got stream");
      this.videoStream = stream;
      this.socketConnection = new WebSocket("ws://healthmonitor-signalserver.herokuapp.com");
      this.socketConnection.onopen = ev => {
        videoView.srcObject = stream;
        //console.log(stream);
        this.socketConnection.send(
          JSON.stringify({
            type: "register",
            from: registration
          })
        );

        this.socketConnection.onmessage = ev => {
          let data = JSON.parse(ev.data);
          console.log(data);
          switch (data.type) {
            case "candidate":
              if (data.candidate) {
                let peecon = this.connections.find(p => p.from === data.user);
                if (peecon) {
                  peecon.connection.addIceCandidate(new RTCIceCandidate(data.candidate));
                }
              }
              break;
            case "offer":
              let peercon = new RTCPeerConnection({
                iceServers: [{ urls: "stun:stun.1.google.com:19302" }]
              });
              this.connections.push({ from: data.user, connection: peercon });
              this.videoStream.getTracks().forEach(t => {
                peercon.addTrack(t, this.videoStream);
                console.log(t.id);
              });
              this.handleCreateChannel(peercon);
              peercon.onicecandidate = ev => {
                if (ev.candidate) {
                  this.socketConnection.send(
                    JSON.stringify({
                      type: "candidate",
                      from: registration,
                      to: data.user,
                      candidate: ev.candidate
                    })
                  );
                }
              };
              peercon.ondatachannel = ev => {
                console.log(ev.channel);
              };
              console.log(data.offer);
              peercon.setRemoteDescription(new RTCSessionDescription(data.offer)).then(() => {
                peercon.createAnswer().then(answer => {
                  peercon.setLocalDescription(answer).then(() => {
                    this.socketConnection.send(
                      JSON.stringify({
                        type: "answer",
                        from: registration,
                        to: data.user,
                        answer: answer
                      })
                    );
                  });
                });
              });
              break;
            case "answer":
              let peecon = this.connections.find(p => p.from === data.user);
              if (peecon) {
                peecon.connnection.setRemoteDescription(new RTCSessionDescription(data.answer));
              }
              break; 
            default:
          }
        };
      };

      const DataSocket = new WebSocket('ws://localhost:8080');
      DataSocket.onmessage = mv => {
        for(let p of this.connections)
          if(p.connection.dc.readyState === 'open')
            p.connection.dc.send(mv.data);
      };
    })
    .catch(err => {
      alert(err.message);
      console.error(err);
    });
};

Server.prototype.stop = function() {
  this.socketConnection.close();
  videoView.srcObject = null;
  this.videoStream.getTracks().forEach(t => {
    t.stop();
  });
};

serv = new Server();
serv.start();
