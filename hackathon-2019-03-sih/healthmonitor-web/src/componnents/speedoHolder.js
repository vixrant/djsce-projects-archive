import React, { Component } from "react";
import CircularProgressbar from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Theme from "../Theme";
import PeerConnectionStatic from "../lib/PeerConnection";
class SpeedoHolder extends Component {
    constructor(props){
        super(props);
        this.state = {
            temp:undefined,
        }
    }
    componentDidMount(){
        
    }
  render() {
    return (
      <div
        style={{
          flex: 1,
          margin: 10,
          textAlign: "center",
          borderRadius: 10,
          background:Theme.purpleDark,
          padding: 10,
          position: "relative",
          display: "flex",
          flexDirection:'column',
          justifyContent: "center",
          alignItems: "center",
          ...this.props.style,
        }}
      >
        <h3 style={{color:'white'}}>{this.props.title}</h3>
        <CircularProgressbar styles={{ root: { width: 100 },path:{stroke:this.props.color?this.props.color:'white'}}} percentage={this.props.percentage?this.props.percentage:0} />
        <div style={{ position: "absolute",alignSelf:'center',justifyContent:'center',alignItems:'center',display:'flex'}}>
        <img src={this.props.icon} alt={'  '} style={{objectFit:'contain',width:40,height:40,textAlign:'center',marginBottom:10}}/>
        </div>
        <h3 style={{color:'white'}}>{this.props.value}</h3>
      </div>
    );
  }
}
export default SpeedoHolder;
