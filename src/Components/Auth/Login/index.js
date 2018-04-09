import React, { Component } from "react";
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
// import Config from 'react-native-config';
import InputForm from "../TextFieldInput";
import firebase from "firebase";

class Login extends Component {
  constructor() {
    super();
    this.state = { email: "", password: "", loading: false, error: "" };
    this.login = this.login.bind(this);
  }

  login() {
    this.setState({ error: "", loading: true });

    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        this.setState({ loading: false });
        AsyncStorage.setItem("userEmail", email);
        this.props.navigation.navigate("Main");
      })
      .catch(error => {
        this.setState({ error: error.code, loading: false });
      });
  }
  renderButtonOrLoading() {
    if (this.state.loading) {
      return (
        <View>
          <Text>Now Loading</Text>
        </View>
      );
    }
    return <Button onPress={this.login} title="Log in" />;
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
        <Text>{this.state.error}</Text>
        {this.renderButtonOrLoading()}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Register")}
        >
          <Text>not sign up?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
