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

export default class InventryDetails extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.container}>

        <Text>This is description page</Text>

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
  }
});
