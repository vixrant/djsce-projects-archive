import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBr-L7xzRU1ll2klScpqv_WsysjCkZP6Io",
    authDomain: "healthmonitor-sih.firebaseapp.com",
    databaseURL: "https://healthmonitor-sih.firebaseio.com",
    projectId: "healthmonitor-sih",
    storageBucket: "healthmonitor-sih.appspot.com",
    messagingSenderId: "573983806378"
  };
firebase.initializeApp(config);
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
