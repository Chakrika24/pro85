import React,{Component} from 'react';
import {
  Text,
  Alert,
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class ExchangeScreen extends Component{
  constructor(){
    super();
    this.state ={
      userName : firebase.auth().currentUser.email,
      itemName : '',
      description : ''
    }
  }

  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }

  addItem =(itemName, description)=>{
    var userName = this.state.userName
    var randomRequestId = this.createUniqueId()
    db.collection('requested_items').add({
        "username": userName,
        "item_name":itemName,
        "description": description,
        "exchange_id"  : randomRequestId,
    })
    
    this.setState({
       itemName :'',
       description : ''
    })
    
    return  alert(
        'Item Ready To Exchange',
        '',
        [
          {text: 'OK', onPress: () => { this.props.navigation.navigate('HomeScreen')
          }}
        ]
    );
  }

  render(){
    return (
      <SafeAreaProvider>
      <View style={{flex: 1}}>
        <MyHeader title="Add Item" navigation ={this.props.navigation} />
         <KeyboardAvoidingView style={styles.keyBoardStyle}>
              <TextInput
                style ={styles.formTextInput}
                placeholder={"Item Name"}
                onChangeText={(text)=>{
                    this.setState({
                        itemName:text
                    })
                }}
                value={this.state.itemName}
              />
              <TextInput
                style ={[styles.formTextInput,{height:300}]}
                multiline
                numberOfLines ={8}
                placeholder={"Description"}
                onChangeText={(text)=>{
                    this.setState({
                        description:text
                    })
                }}
                value ={this.state.description}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.addItem(this.state.itemName,this.state.description)}}
                >
                <Text>Exchange</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
      </SafeAreaProvider>
    )
  }
}



  const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:"#6666FF",
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#6666FF",
    },
  }
)

