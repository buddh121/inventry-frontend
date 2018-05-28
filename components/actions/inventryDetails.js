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
import GridView from 'react-native-super-grid';
import config from '../../config'


export default class InventryDetails extends Component{
  constructor(props) {
    super(props)
    this.state = {
      userToken: props.navigation.state.params.userToken,
      userId: props.navigation.state.params.userId,
      isLoading: true
    }
    this._fetchInventryItems()
  }

  _fetchInventryItems(){
    console.log('Fetch callled');
    url = 'http://'+ config.ip + ':' + config.port + '/api/inventries/fetch' + '?access_token=' + this.state.userToken
    console.log(url);
    fetch(url)
    .then((response) => {
      if(response.status == 200) {
        return Promise.all([response.json()])
      }else {
        alert("Something went wrong please try again...")
      }
    })
    .then(([res]) => {
      this.setState({
        data: res.data,
        isLoading: false
      })
    })
    .done()
  }

  render() {
    
    if (this.state.isLoading) {
      	return(
  				<View style = {{flex: 1, paddingTop: 200}}>
  				 <ActivityIndicator/>
  				</View>
		    )
    }

    return(
      <GridView
        itemDimension={130}
        items={this.state.data}
        style={styles.gridView}
        renderItem={item => (
          <View style={[styles.itemContainer, { backgroundColor: '#f1c40f' }]}>
            <Text style={styles.itemName}>{item.productName}</Text>
            <Text style={styles.itemName}>{item.mrp}</Text>
            <Text style={styles.itemName}>{item.quantity}</Text>
          </View>
        )}
      />
    )
  }
}


const styles = StyleSheet.create({
  gridView: {
    paddingTop: 25,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});
