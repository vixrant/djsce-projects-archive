import React, { Component } from "react";
import "react-circular-progressbar/dist/styles.css";
import "./CSS/style.css";
import Theme from "../Theme";
class BloodPressureDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sis: 0,
      dia: 0
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.value) {
      let bp = nextProps.value.split("/");
      let systolic = bp[0];
      let diastolic = bp[1];
      this.setState({ sis: systolic, dia: diastolic });
    }
  }
  render() {
    return (
      <div
        style={{
          flex: 1,
          margin: 10,
          textAlign: "center",
          borderRadius: 10,
          background: Theme.purpleDark,
          padding: 10,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          ...this.props.style
        }}
      >
        <h3 style={{ color: "white" }}>{this.props.title}</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: 5,
            borderRadius: 5,
            overflow: "hidden"
          }}
        >
          <h2
            className="Digital"
            style={{
              margin: "auto",
              background: "#242b47",
              color:
                this.state.sis > 0
                  ? this.state.sis < 90 || this.state.sis > 150
                    ? Theme.SECONDARY1
                    : Theme.SECONDARY2
                  : "white",
              borderRadius: 5,
              minWidth: 70,
              maxWidth: 90
            }}
          >
            {this.state.sis}
          </h2>
          <p style={{ margin: "auto", color: "white" }}> Sis mmhg</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: 5,
            borderRadius: 5,
            overflow: "hidden"
          }}
        >
          <h2
            className="Digital"
            style={{
              margin: "auto",
              color:
                this.state.dia > 0
                  ? this.state.dia < 60 || this.state.dia > 100
                    ? Theme.SECONDARY1
                    : Theme.SECONDARY2
                  : "white",
              background: "#242b47",
              borderRadius: 5,
              minWidth: 70,
              maxWidth: 90
            }}
          >
            {this.state.dia}
          </h2>
          <p style={{ margin: "auto", color: "white" }}> Dia mmhg</p>
        </div>
        <h3 style={{ color: "white" }}>{this.props.value}</h3>
      </div>
    );
  }
}
export default BloodPressureDisplay;
