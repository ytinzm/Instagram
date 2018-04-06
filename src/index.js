import React, { Component } from "react";
import { AsyncStorage } from "react-native";

import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/register";
import MainScreen from "./Components/Main";

class App extends Component {
  constructor() {
    super();
    this.state = { loading: true, user: "" };
    this._loadInitialState = this._loadInitialState.bind();
  }
  componentDidMount() {
    this._loadInitialState().done();
  }
  async _loadInitialState() {
    try {
      await AsyncStorage.setItem("foo", "bar");
      await AsyncStorage.getItem("foo").then(console.log); // null
      await AsyncStorage.getAllKeys().then(console.log); // []
    } catch (error) {
      console.log("AsyncStorage error:" + error);
    }
  }
  render() {
    if (this.state.loading) {
      return null;
    }
    return <Login />;
  }
}

export default App;
