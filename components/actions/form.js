import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native'

export default class InventryForm extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <View style={styles.container}>

      <TextInput
        style={styles.textInput}
        placeholder='Product id'
        onChangeText= {(email) => this.setState({email})}
        underlineColorAndroid= 'transparent'
      />

      <TextInput
        style={styles.textInput}
        placeholder= 'Product Name'
        onChangeText= {(password) => this.setState({password})}
        underlineColorAndroid= 'transparent'
      />

      <TextInput
        style={styles.textInput}
        placeholder= 'Vendor'
        onChangeText= {(password) => this.setState({password})}
        underlineColorAndroid= 'transparent'
      />

      <TextInput
        style={styles.textInput}
        placeholder= 'MRP'
        onChangeText= {(password) => this.setState({password})}
        underlineColorAndroid= 'transparent'
      />

      <TextInput
        style={styles.textInput}
        placeholder= 'Batch Number'
        onChangeText= {(password) => this.setState({password})}
        underlineColorAndroid= 'transparent'
      />

      <TextInput
        style={styles.textInput}
        placeholder= 'Batch Date'
        onChangeText= {(password) => this.setState({password})}
        underlineColorAndroid= 'transparent'
      />

      <TextInput
        style={styles.textInput}
        placeholder= 'Quantity'
        onChangeText= {(password) => this.setState({password})}
        underlineColorAndroid= 'transparent'
      />

      <TouchableOpacity
        style={styles.button}
        onPress={this.login}>
        <Text> Log in </Text>
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
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff'
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 20,
    alignItems: 'center'
  }
});
