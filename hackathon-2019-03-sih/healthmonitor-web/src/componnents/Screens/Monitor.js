import React, { Component } from "react";
import GraphHolder from "../graphHolder";
import Theme from "../../Theme";
import SpeedoHolder from "../speedoHolder";
import BloodPressureDisplay from "../bloodPressureDisplay";
import PeerConnectionStatic from "../../lib/PeerConnection";
import Firebase from "firebase";
class Monitor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: false,
      previousPatients: [],
      phone: "",
      data: {}
    };
    this.hrData = [];
  }
  componentDidMount() {
    if (Firebase.auth().currentUser) {
      console.log("mounted");
      Firebase.firestore()
        .collection("Doctors")
        .doc(Firebase.auth().currentUser.uid)
        .get()
        .then(data => {
          this.setState({ phone: data.data()?data.data().phone:'+917045413818' });
        });
      Firebase.firestore()
        .collection("Doctors")
        .doc(Firebase.auth().currentUser.uid)
        .collection("patients")
        .get()
        .then(snaps => {
          let l = [];
          console.log(snaps);
          snaps.docs.forEach(d => {
            l.push(d.data());
          });
          console.log(l);
          this.setState({ previousPatients: [...this.state.previousPatients, ...l] });
        })
        .catch(err => {
          console.log(err);
        });
    }
    window.addEventListener("resize", () => {
      this.setState({});
    });
  }
  componentWillUnmount() {
    window.removeEventListener("resize", () => {
      this.setState({});
    });
  }

  handleConnect = () => {
    if (this.state.connectionEmail) {
      this.connection = PeerConnectionStatic.createConnection(this.state.connectionEmail, this.state.phone);
      this.connection.on("dataChannel", data => {
        //console.log(data);
        if (this.hrData.length !== 0) {
          this.hrData.push({ x: this.hrData[this.hrData.length - 1].x + 1, y: JSON.parse(data).hr });
          if (this.hrData.length > 20) {
            this.hrData.shift();
          }
        } else {
          this.hrData.push({ x: 1, y: JSON.parse(data).hr });
        }
        console.log(this.hrData);
        //console.log("FOUND DATA FROM DATA CHANNEL " + data);
        this.setState({ data: JSON.parse(data) });
      });
      this.connection.on("track", ms => {
        this.setState(
          {
            connected: true
          },
          () => {
            if (this.video) {
              Firebase.firestore()
                .collection("Doctors")
                .doc(Firebase.auth().currentUser.uid)
                .collection("patients")
                .doc(this.state.connectionEmail)
                .set({ email: this.state.connectionEmail });
              console.log("Setting video stream", ms);
              for (let t of ms.getTracks()) console.log(t);
              this.video.srcObject = ms;
              console.log(this.video.srcObject);
            }
          }
        );
      });
    }
  };

  render() {
    if (this.state.connected) {
      return (
        <div style={{ display: "flex", flexDirection: window.innerWidth < 1000 ? "column" : "row" }}>
          <div
            style={{
              flex: 1,
              width: "100%",
              margin: 2,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <video
              ref={ref => (this.video = ref)}
              style={{ width: "100%", height: 500, backgroundColor: Theme.purpleDark, borderRadius: 10 }}
              autoPlay
            />
            <GraphHolder data={this.hrData} />
          </div>
          <div
            style={{
              flex: 1,
              width: "100%",
              margin: 2,
              display: "flex",
              flexDirection: window.innerWidth < 1000 ? (window.innerWidth < window.innerHeight ? "column" : "row") : "column"
            }}
          >
            <SpeedoHolder
              title="Temperature"
              value={`${this.state.data.temp ? Math.round(this.state.data.temp) : "0"}°F`}
              percentage={this.state.data.temp ? ((this.state.data.temp - 95) / 20) * 100 : 0}
              color={this.state.data.temp > 100.5 ? Theme.SECONDARY1 : Theme.SECONDARY2}
              icon={require("../../res/icons/thermometer.png")}
            />
            <BloodPressureDisplay
              value={this.state.data.bp}
              title="Blood Pressure"
              icon={require("../../res/icons/blood-pressure.png")}
            />
            <SpeedoHolder
              title="Blood Sugar"
              value={`${this.state.data.sl ? Math.round(this.state.data.sl) : "0"} mg/dl`}
              icon={require("../../res/icons/test.png")}
              percentage={this.state.data.sl ? ((this.state.data.sl - 40) / 110) * 100 : 0}
              color={this.state.data.sl < 60 || this.state.data.sl > 120 ? Theme.SECONDARY1 : Theme.SECONDARY2}
            />
            <SpeedoHolder
              title="Oxygen Saturation"
              percentage={this.state.data.osl ? this.state.data.osl : 0}
              color={this.state.data.osl < 80 ? Theme.SECONDARY1 : Theme.SECONDARY2}
              value={`${this.state.data.osl ? Math.round(this.state.data.osl) : "0"}%`}
              icon={require("../../res/icons/oxygen.png")}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", padding: 50 }}>
          <h1 style={{ color: "white", fontSize: 40 }}>Connect</h1>
          <input
            onChange={e => {
              this.setState({ connectionEmail: e.target.value });
            }}
            style={style.input}
            placeholder="patient id"
          />
          <button style={style.button} onClick={this.handleConnect}>
            Connect
          </button>
          <div
            style={{
              minWidth: 300,
              minHeight: 200,
              maxWidth: 300,
              maxHeight: 300,
              background: Theme.purpleDark,
              borderRadius: 10,
              padding: 10,
              margin: 10,
              overflow: "scroll"
            }}
          >
          <p style={{textAlign:'center',color:'white',fontSize:30}}>Recent patients</p>
            {this.state.previousPatients.map((p, k) => {
              return (
                <p
                  onClick={() => {
                    this.setState({ connectionEmail: p.email });
                    this.handleConnect();
                  }}
                  id={k}
                  style={{ textAlign: "center", color: "white", cursor: "pointer", background: Theme.purple, padding: 10 }}
                >
                  {p.email}
                </p>
              );
            })}
          </div>
        </div>
      );
    }
  }
}
const style = {
  input: {
    margin: 10,
    borderRadius: 5,
    border: "none",
    padding: 10,
    textAlign: "center"
  },
  button: {
    textAlign: "center",
    width: 150,
    height: 30,
    border: "none",
    color: "white",
    backgroundColor: Theme.purpleDark,
    boxShadow: "1px 1px 1px 0px rgba(0,0,0,0.2)"
  }
};

export default Monitor;
