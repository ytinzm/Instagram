import React, { Component } from "react";

import { TabNavigator, StackNavigator } from "react-navigation";

import Loading from "./loading";

import Main from "./Components/Main/Main";
import Detail from "./Components/Main/Detail";
import New from "./Components/Main/New";

import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";

const RootStack = StackNavigator(
  {
    Loading: { screen: Loading },
    MainScreen: {
      screen: TabNavigator(
        {
          Main: { screen: Main },
          Detail: { screen: Detail },
          New: { screen: New }
        },
        {
          tabBarPosition: "bottom"
        }
      )
    },
    AuthScreen: {
      screen: StackNavigator(
        {
          Login: { screen: Login },
          Register: { screen: Register }
        },
        {
          tabBarOption: "none"
        }
      )
    }
  },
  { initialRouteName: "Loading" }
);

class MainNavigator extends Component {
  render() {
    return <RootStack />;
  }
}

export default MainNavigator;
