import React, { Component } from "react";
import Firebase from "firebase";
import Theme from "../../Theme";
class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: false,
      email: "",
      password: "",
      error: "",
      phone:"",
      connectionEmail: ""
    };
  }
  componentDidMount() {
    this.unsub = Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  componentWillUnmount() {
    this.unsub();
  }
  Login = () => (
    <div style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", padding: 50,flexGrow:1 }}>
     <img src={require('../../res/images/LoginBG.jpg')} style={{width:'100%',position:'absolute',objectFit:'cover',zIndex:-1,overflow:'hidden',backdropFilter:'blur(2px)'}} alt=' $' />
      <h1 style={{ color: "white" ,fontSize:40}}>Login</h1>
      <p style={{ color: "red" }}>{this.state.error}</p>
      <input
        onChange={ev => {
          this.setState({ email: ev.target.value });
        }}
        style={style.input}
        type="email"
        placeholder="email"
      />
      <input
        onChange={ev => {
          this.setState({ password: ev.target.value });
        }}
        style={style.input}
        type="password"
        placeholder="password"
      />
      <button
        style={style.button}
        onClick={() => {
          if (this.state.email !== "" && this.state.password !== "") {
            Firebase.auth()
              .signInWithEmailAndPassword(this.state.email, this.state.password)
              .catch(err => {
                alert(err);
              });
          }
        }}
      >
        Login
      </button>
      <span style={{ margin: 10, color: "white" }}>
        Don't have an account?{" "}
        <a
          href="/#register"
          onClick={() => {
            this.setState({ register: true });
          }}
          style={{ color: 'white',textDecoration:'underline' }}
        >
          Register
        </a>
      </span>
    </div>
  );
  Register = () => (
    <div style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", padding: 50 }}>
     <img src={require('../../res/images/RegisterBG.jpg')} style={{width:'100%',position:'absolute',objectFit:'cover',zIndex:-1,overflow:'hidden',backdropFilter:'blur(2px)'}} alt=' $' />
      <h1 style={{ color: "white",fontSize:40}}>Register</h1>
      <p style={{ color: "red" }}>{this.state.error}</p>
      <input
        onChange={ev => {
          this.setState({ email: ev.target.value });
        }}
        style={style.input}
        type="email"
        placeholder="email"
      />
      <input
        onChange={ev => {
          this.setState({ phone: ev.target.value });
        }}
        style={style.input}
        type="phone"
        placeholder="Mobile No."
      />
      <input
        onChange={ev => {
          this.setState({ password: ev.target.value });
        }}
        style={style.input}
        type="password"
        placeholder="password"
      />
      <button
        style={style.button}
        onClick={() => {
          if (this.state.email !== "" && this.state.password !== "") {
            Firebase.auth()
              .createUserWithEmailAndPassword(this.state.email, this.state.password)
              .catch(err => {
                alert(err);
              }).then(()=>{
                Firebase.firestore().collection('Doctors').doc(Firebase.auth().currentUser.uid).set({phone:'+91' + this.state.phone});  
              });
          }
        }}
      >
        Register
      </button>
      <span style={{ margin: 10, color: "white" }}>
        already have an account?{" "}
        <a
          href="/#login"
          onClick={() => {
            this.setState({ register: false });
          }}
          style={{ color: 'white',textDecoration:'underline' }}
        >
          Login
        </a>
      </span>
    </div>
  );
  render() {
    if (this.state.register) {
      return <this.Register />;
    } else {
      return <this.Login />;
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
    width:150,
    height:30,
    border:'none',
    color:'white',
    backgroundColor: Theme.purpleDark,
    boxShadow:'1px 1px 1px 0px rgba(0,0,0,0.2)'
  }
};
export default Authentication;
