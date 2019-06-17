// import React from "react";
// import { createStackNavigator } from "react-navigation";
// import { createAppContainer } from 'react-navigation';

// import Home from "./screens/Home/";
// import NotHome from "./screens/NotHome/";

// const AppNavigator = createStackNavigator(
//   {
//     Home: { screen: Home },
//     NotHome: { screen: NotHome }
//   },
//   {
//     index: 0,
//     initialRouteName: "Home",
//     headerMode: "none"
//   }
// );

// const App = createAppContainer(AppNavigator);

// export default App;

import React from 'react';

import {
  // createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation';

import Routes from './configs/Routes';

// const RootStack = createStackNavigator(
//   Routes.routes,
//   Routes.options
// );

const DrawerNavigator = createDrawerNavigator(
  Routes.routes, {}
);

const AppContainer = createAppContainer(DrawerNavigator);

export default () => <AppContainer />;