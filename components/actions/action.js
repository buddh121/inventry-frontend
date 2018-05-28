import React, {Component} from 'react'
import {
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  View
} from 'react-native'

export default class Action extends Component{
  constructor(props) {
    super(props)
    this.state = {
      userToken: props.navigation.state.params.userToken,
      userId: props.navigation.state.params.userId
    }
  }

  _fetchInventry() {
    // alert("Fetch invebtry called")
    this.props.navigation.navigate('InventryDetails', {userToken: this.state.userToken, userId: this.state.userId})
  }

  _addInventry() {
    this.props.navigation.navigate('InventryForm', {userToken: this.state.userToken, userId: this.state.userId})
  }

  render() {
    return(
      <View style={styles.container}>

        <TouchableOpacity
              style={styles.button}
              onPress={this._fetchInventry.bind(this)}>
              <Text> Show Inventry </Text>
        </TouchableOpacity>

        <TouchableOpacity
              style={styles.button}
              onPress={this._addInventry.bind(this)}>
              <Text> Add Inventry </Text>
        </TouchableOpacity>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3',
    paddingLeft: 40,
    paddingRight: 40
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 20,
    alignItems: 'center'
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: '#fff',
    fontWeight: 'bold'
  }
});
