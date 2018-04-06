import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import firebase from "firebase";
import TextFieldInput from "../TextFieldInput";
import styles from "./styles";

class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: "",
      loading: false
    };
    this.renderButtonOrLoading = this.renderButtonOrLoading.bind(this);
    this.onSignUpPress = this.onSignUpPress.bind(this);
  }
  onSignUpPress() {
    this.setState({ error: "", loading: true });

    const { email, password } = this.state;
    firebase
      .auth()
      .createUserAndRetrieveDataWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ error: "", loading: false });
        this.props.navigator.navigate("Main");
      })
      .catch(error => {
        const errorCode = error.code;

        if (errorCode === "auth/weak-password") {
          this.setState({ error: "A weaken password", loading: false });
        } else {
          this.setState({ error: "Authentication failed.", loading: false });
        }
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
    return <Button onPress={this.onSignUpPress} title="Sign up" />;
  }
  render() {
    return (
      <View>
        <TextFieldInput
          label="Email Address"
          placeholder="youremailaddress@domain.com"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
          autoCorrect={false}
        />
        <TextFieldInput
          label="Password"
          autoCorrect={false}
          placeholder="Your Password"
          secureTextEntry
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        {this.renderButtonOrLoading()}
      </View>
    );
  }
}

export default SignInForm;
