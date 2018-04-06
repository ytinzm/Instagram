import React, { Component } from "react";
import { View, Button } from "react-native";
// import Config from 'react-native-config';
import firebase from "firebase";
import InputForm from "../TextFieldInput";

class Login extends Component {
  constructor() {
    super();
    this.state = { email: "", password: "" };
    this.login = this.login.bind(this);
  }
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

  login() {
    const { email, password } = this.state;
    console.log(email);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        console.error(result);
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View>
        <InputForm
          label="Email Address"
          placeholder="you@domain.com"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <InputForm
          label="Password"
          autoCorrect={false}
          placeholder="*******"
          secureTextEntry
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <Button title="Log in" onPress={this.login} />
      </View>
    );
  }
}

export default Login;
