import React, {Component} from 'react';
import {XYPlot, YAxis, HorizontalGridLines,LineMarkSeries} from 'react-vis';
import Theme from '../Theme';
class GraphHolder extends Component {
    componentDidMount(){
      console.log(this.props.data);
    }
  render() {
    return (
    <div style={style.container}>
      <div style={{display:'flex',flexDirection:'row'}}>
      <h1 style={{color:'white',margin:20}}>ECG</h1>
      <h1 style={{color:'white',margin:20}}>{`${this.props.data && this.props.data.length>0?Math.round(this.props.data[this.props.data.length-1].y):'0'} bpm`}</h1>
      </div>
      <div style={{flex:1,padding:10}}>
      <XYPlot
        width={window.innerWidth>1000?1000:window.innerWidth-50}
        height={window.innerWidth<window.innerHeight?200:500}>
        <HorizontalGridLines/>
        <LineMarkSeries
            curve={'curveMonotoneX'}
            color='green'
            data={this.props.data?this.props.data:[]}/>
        <YAxis/>
      </XYPlot>
      </div>
    </div>
    );
  }
}
const style = {
    container:{
        display:'flex',
        background:Theme.purpleDark,
        flexDirection:'column',
        margin:5,
        boxShadow:2,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        overflow:'hidden',
        width:'100%'
    }
}
export default GraphHolder;
