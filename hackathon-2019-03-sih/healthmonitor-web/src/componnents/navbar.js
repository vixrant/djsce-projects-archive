import React, { Component } from 'react';
import AccountCircle from './accountCircle';
import Notification from './notificationNavbar';
import Firebase from 'firebase';
class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            showNavBg : true,
        }
    }
    componentDidMount(){
        // window.addEventListener('scroll',event=>{
        //     if(window.innerWidth > 1000){
        //     if(event.view.scrollY > 10){
        //         if(!this.state.showNavBg){
        //             this.setState({showNavBg:true});
        //         }
        //     }else{
        //         if(this.state.showNavBg){
        //             this.setState({showNavBg:false});
        //         }
        //     }
        // }
        // })
        this.setState({showNavBg:false})
    }
  render() {
    return (
      <div style={{...Style.NavBar,backgroundColor:this.state.showNavBg?'#242b47':'transparent',boxShadow:this.state.showNavBg?'0 4px 8px 0 rgba(0,0,0,0.2)':'0 0px 0px 0 rgba(0,0,0,0.0)'}}>
      <h4 style={Style.title}>Arogya - Connecting Lives</h4>
      <div style={Style.fill}>{this.props.center}</div>
      {/*<Notification/>*/}
      {Firebase.auth().currentUser?<AccountCircle/>:null}
      </div>
    );
  }
}
const Style = {
    NavBar:{
        width:'100%',
        minHeight:50,
        display:'flex',
        flexDirection:'row',
        color:'#fff',
        alignItems:'center',
        position:'relative',
        top:0,
        zIndex:2
    },
    title:{
        margin:10,
    },
    fill:{
        flex:1,
    }
}
export default NavBar;
