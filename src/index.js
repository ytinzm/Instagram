import React, { Component } from "react";

import { StackNavigator } from "react-navigation";

import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/register";
import MainScreen from "./Components/Main";

const RootStack = StackNavigator(
  {
    Register: {
      screen: Register
    },
    Login: {
      screen: Login
    },
    Main: {
      screen: MainScreen
    }
  },
  {
    initialRouteName: "Register"
  }
);

class App extends Component {
  render() {
    return <RootStack />;
  }
}

export default App;
