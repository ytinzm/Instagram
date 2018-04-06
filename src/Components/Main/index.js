import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import Main from './Main';
import Detail from './Detail';
import New from './New';

const MainRootStack = TabNavigator(
  {
    Main: { screen: Main },
    Detail: { screen: Detail },
    New: { screen: New },
  },
  {
    tabBarPosition: 'bottom',
  },
);

class MainNavigator extends Component {
  render() {
    return <MainRootStack />;
  }
}

export default MainNavigator;
