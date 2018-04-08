import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import firebase from "firebase";

import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/register";
import MainScreen from "./Components/Main";

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyB9So7cOeKprxApWec0sRrrULSUsH1HA3E",
      authDomain: "instagram-b3397.firebaseapp.com",
      databaseURL: "https://instagram-b3397.firebaseio.com",
      projectId: "instagram-b3397",
      storageBucket: "instagram-b3397.appspot.com",
      messagingSenderId: "387354036691"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user !== null) {
        this.props.navigation.navigator("Main");
      } else {
        this.props.navigation.navigator("Auth");
      }
    });
  }

  render() {
    return null;
  }
}

export default App;
