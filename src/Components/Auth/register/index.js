import React, { Component } from "react";
import { View } from "react-native";

import * as firebase from "firebase";

import Register from "./Register";

export default class myapp extends Component {
  render() {
    return (
      <View>
        <Register navigator={this.props.navigation} />
      </View>
    );
  }
}
