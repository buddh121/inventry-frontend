import React, {Component} from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native'
import config from '../../config'

export default class InventryForm extends Component{
  constructor(props) {
    super(props)
    this.state = {
      userToken: props.navigation.state.params.userToken,
      userId: props.navigation.state.params.userId,
      status: "ACTIVE"
    }
  }

  _submit(){
    url = 'http://'+ config.ip + ':' + config.port + '/api/inventries/create' + '?access_token=' + this.state.userToken
    console.log(url);
    fetch(url, {

      method: 'POST',

      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        productId: this.state.productId,
        productName: this.state.productName,
        vendor: this.state.vendor,
        mrp: this.state.mrp,
        batchNumber: this.state.batchNumber,
        batchDate: this.state.batchDate,
        quantity: this.state.quantity,
        status: this.state.status
      })

    })
    .then((response) =>{
      if(response.status == 200) {
        alert("record created successfully")
      }else{
        console.log(response.status);
        console.log(response);
        alert('something went wrong please try again... ')
      }
    })
    .done()
  }

  render() {
    return(


      <View style={styles.container}>

      <TextInput
        style={styles.textInput}
        placeholder='Product id'
        onChangeText= {(productId) => this.setState({productId})}
        underlineColorAndroid= 'transparent'
      />

      <TextInput
        style={styles.textInput}
        placeholder= 'Product Name'
        onChangeText= {(productName) => this.setState({productName})}
        underlineColorAndroid= 'transparent'
      />

      <TextInput
        style={styles.textInput}
        placeholder= 'Vendor'
        onChangeText= {(vendor) => this.setState({vendor})}
        underlineColorAndroid= 'transparent'
      />

      <TextInput
        style={styles.textInput}
        placeholder= 'MRP'
        onChangeText= {(mrp) => this.setState({mrp})}
        underlineColorAndroid= 'transparent'
      />

      <TextInput
        style={styles.textInput}
        placeholder= 'Batch Number'
        onChangeText= {(batchNumber) => this.setState({batchNumber})}
        underlineColorAndroid= 'transparent'
      />

      <TextInput
        style={styles.textInput}
        placeholder= 'Batch Date'
        onChangeText= {(batchDate) => this.setState({batchDate})}
        underlineColorAndroid= 'transparent'
      />

      <TextInput
        style={styles.textInput}
        placeholder= 'Quantity'
        onChangeText= {(quantity) => this.setState({quantity})}
        underlineColorAndroid= 'transparent'
      />

      <TouchableOpacity
        style={styles.button}
        onPress={this._submit.bind(this)}>
        <Text> submit </Text>
      </TouchableOpacity>

      </View>

    )
  }
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
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
