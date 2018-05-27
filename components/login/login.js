import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage } from 'react-native';
import config from '../../config'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
        email: '',
        password: ''
    }
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    var value = await AsyncStorage.getItem('user');
    if (value !==null) {
      this.props.navigation.navigate('Profile');
    }
  }

  _fetchRole(){
    url = 'http://'+ config.ip + ':' + config.port + '/api/Users/login'
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>

        <View style={styles.container}>

          <Text style={styles.header}> Login </Text>

          <TextInput
            style={styles.textInput}
            placeholder='email'
            onChangeText= {(email) => this.setState({email})}
            underlineColorAndroid= 'transparent'
          />

          <TextInput
            style={styles.textInput}
            placeholder= 'password'
            onChangeText= {(password) => this.setState({password})}
            underlineColorAndroid= 'transparent'
          />

          <TouchableOpacity
            style={styles.button}
            onPress={this.login}>
            <Text> Log in </Text>
          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>
    );
  }

  login = () => {

    url = 'http://'+ config.ip + ':' + config.port + '/api/Users/login'
    console.log(url)
    fetch(url, {

      method: 'POST',

      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })

    })

    .then((response) =>{
      if (response.status == 200) {
        return Promise.all([response.json()])
      }else {
        alert('login failed please try again...')
      }
    } )
    .then(([data]) => {
      userId = data.userId
      token = data.id

      if(userId && token) {
        this.props.navigation.navigate('Action', {userId: userId, userToken: token})
      }

    })
    .done();

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
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: '#fff',
    fontWeight: 'bold'
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
})
