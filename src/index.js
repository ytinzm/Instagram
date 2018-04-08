import React, { Component } from "react";
import { TabNavigator, StackNavigator } from "react-navigation";

import InitialRoading from "./loading";

import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/register";

import Main from "./Components/Main/Main";
import Detail from "./Components/Main/Detail";
import New from "./Components/Main/New";

AuthRootStack = StackNavigator(
  {
    Login: { screen: Login },
    Register: { screen: Register }
  },
  {
    initialRouteName: "Login",
    initialRouteParams: { PrimaryNavigation: this.props.navigation }
  }
);

MainRootStack = TabNavigator(
  {
    Main: { screen: Main },
    Detail: { screen: Detail },
    New: { screen: New }
  },
  {
    initialRouteName: "Main",
    tabBarPosition: "bottom",
    initialRouteParams: { PrimaryNavigation: this.props.navigation }
  }
);

PrimaryRootStack = StackNavigator(
  {
    Loading: InitialRoading,
    Auth: AuthRootStack,
    Main: MainRootStack
  },
  {
    initialRouteName: "Loading"
  }
);

class MainNavigator extends Component {
  render() {
    return <PrimaryRootStack PrimaryNavigation={this.props.navigation} />;
  }
}

export default MainNavigator;
