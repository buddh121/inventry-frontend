import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator} from 'react-navigation';
import Login from './components/login/login'
import Action from './components/actions/action'
import InventryDetails from './components/actions/inventryDetails'
import InventryForm from './components/actions/form'

const Application = createStackNavigator({
   Login: { screen: Login},
   Action: {screen: Action},
   InventryDetails: {screen: InventryDetails},
   InventryForm: {screen: InventryForm}
  }, {
      navigationOptions: {
        header: false
      }
});

export default class App extends Component {
  render() {
    return (
      <Application />
    );
  }
}
