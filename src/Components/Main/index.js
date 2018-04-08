import React, { Component } from "react";
import { TabNavigator } from "react-navigation";

import Main from "./Main";
import Detail from "./Detail";
import New from "./New";

MainRootStack = TabNavigator(
  {
    Main: { screen: Main },
    Detail: { screen: Detail },
    New: { screen: New }
  },
  {
    initialRouteName: "Main",
    tabBarPosition: "bottom",
    initialRouteParams: { user: this.props }
  }
);

class MainNavigator extends Component {
  render() {
    return (
      <MainRootStack
        navigation={this.props.navigation}
        user={this.props.user}
      />
    );
  }
}

export default MainNavigator;
