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
  }

  _fetchInventry() {
    // alert("Fetch invebtry called")
    this.props.navigation.navigate('InventryDetails')
  }

  _addInventry() {
    this.props.navigation.navigate('InventryForm')
  }

  render() {
    return(
      <View style={styles.container}>

        <TouchableOpacity
              style={styles.button}
              onPress={this._fetchInventry}>
              <Text> Show Inventry </Text>
        </TouchableOpacity>

        <TouchableOpacity
              style={styles.button}
              onPress={this._addInventry}>
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
