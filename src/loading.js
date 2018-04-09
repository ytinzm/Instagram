import React, { Component } from "react";
import { AsyncStorage } from "react-native";
import { InitialFirebase } from "./firebase";

class App extends Component {
  constructor() {
    super();
    this.state = { loading: true, user: "" };
    this._loadInitialState = this._loadInitialState.bind();
  }
  componentDidMount() {
    InitialFirebase();
    this._loadInitialState();
  }
  _loadInitialState = async () => {
    let user = await AsyncStorage.getItem("userEmail");
    console.log(user);
    if (user !== null) {
      this.props.navigation.navigate("Main");
    } else {
      this.props.navigation.navigate("Login");
    }
  };
  render() {
    if (this.state.loading) {
      return null;
    }
    return <Login />;
  }
}

export default App;
