import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import DailyActivity from "./DailyActivity";
import DailyCampus from "./DailyCampus";
import Main from "./Main";
import Login from "./Login";
import ViewListDailyActivity from "./ViewListDailyActivity";
import ViewListDailyCampus from "./ViewListDailyCampus";
import ViewDetailA from "./ViewDetailA";
import ViewDetailC from "./ViewDetailC";
import MenuDailyA from "./MenuDailyA";
import MenuDailyC from "./MenuDailyC";
import EditA from "./EditA";
import EditC from "./EditC";

const AppContainer = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Main: {
      screen: Main
    },
    DailyActivity: { 
      screen: DailyActivity
    },
    DailyCampus: {
      screen: DailyCampus 
    },
    ViewListDailyActivity: {
      screen: ViewListDailyActivity
    },
    ViewListDailyCampus: {
      screen: ViewListDailyCampus
    },
    ViewDetailA : {
      screen: ViewDetailA
    },
    ViewDetailC : {
      screen: ViewDetailC
    },
    MenuDailyA : {
      screen: MenuDailyA 
    },
    MenuDailyC : {
      screen: MenuDailyC
    },
    EditA : {
      screen: EditA
    },
    EditC : {
      screen: EditC
    },
  },
  {
    initialRouteName: "Login"
  }
);
const Menu = createAppContainer(AppContainer);
export default class App extends React.Component {
    render() {
        return <Menu />;
    }
}
