import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator} from 'react-navigation';
import Login from './components/login/login'

const Application = createStackNavigator({
   Login: { screen: Login},
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
