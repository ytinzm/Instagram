import React, { Component } from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";
import firebase from "firebase";
// import Config from 'react-native-config';
import InputForm from "../TextFieldInput";
import Main from "../../Main";

class Login extends Component {
  constructor() {
    super();
    this.state = { email: "", password: "" };
    this.login = this.login.bind(this);
  }
  componentDidMount() {
    console.log(firebase.name);
    console.log(firebase.database());
  }

  login() {
    const { email, password } = this.state;
    console.log(email);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        console.error(result);
        return <Main user={email} />;
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
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("SignUp")}
        >
          <Text>not sign up?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
