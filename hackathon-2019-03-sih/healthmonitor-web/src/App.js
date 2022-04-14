import React, { Component } from 'react';
import NavBar from './componnents/navbar';
import Authentication from './componnents/Screens/Authentication';
import Firebase from 'firebase';
import Main from './componnents/Screens/Main';
import PeerConnectionStatic from './lib/PeerConnection';
import Monitor from './componnents/Screens/Monitor';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isMobile:false,
      loggedIn:false,
    }
  }

  componentDidMount(){
    window.addEventListener('resize',()=>{
      this.setState({});
    })
    this.unsub = Firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({loggedIn:true})
      }else{
        this.setState({loggedIn:false})
      }
    })
  }
  componentWillUnmount(){
    window.removeEventListener('resize',()=>{
      this.setState({})
    })
    this.unsub();
  }
  render() {
    return (
      <div style={{display:'flex',flexGrow:1,flexDirection:'column'}}>
        <NavBar/>
        {this.state.loggedIn?<Monitor/>:<Authentication/>}
        <h4 style={{alignSelf:'center',color:'white',textAlign:'center',width:'100%',margin:10,position:'static',bottom:0}}>Made with <img style={{height:15,width:15}} src={require('./res/icons/heart.png')} alt='love'/> by Team Ticca</h4>
      </div>
    );
  }
}

export default App;
