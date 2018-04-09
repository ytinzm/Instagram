import React, { Component } from "react";
import { View, Text, AsyncStorage } from "react-native";

export default class Main extends Component {
  constructor() {
    super();
    this.state = { userEmail: "" };
    this._initialAsyncStorage = this._initialAsyncStorage.bind(this);
  }
  componentDidMount() {
    this._initialAsyncStorage();
  }
  _initialAsyncStorage = async () => {
    let user = await AsyncStorage.getItem("userEmail");
    this.setState({ userEmail: user });
  };
  render() {
    return (
      <View>
        <Text>{this.state.userEmail}</Text>
      </View>
    );
  }
}
