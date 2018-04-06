import React, { Component } from "react";
import { View } from "react-native";

import * as firebase from "firebase";

import Register from "./Register";

export default class myapp extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyB9So7cOeKprxApWec0sRrrULSUsH1HA3E",
      authDomain: "instagram-b3397.firebaseapp.com",
      databaseURL: "https://instagram-b3397.firebaseio.com",
      projectId: "instagram-b3397",
      storageBucket: "instagram-b3397.appspot.com",
      messagingSenderId: "387354036691"
    });
  }
  render() {
    return (
      <View>
        <Register navigator={this.props.navigation} />
      </View>
    );
  }
}
