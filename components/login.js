// components/login.js

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { SocialIcon } from 'react-native-elements';
import { StatusBar } from "expo-status-bar";
import firebase from '../database/firebase';



export default class Login extends Component {
  
  constructor() {
    super();
    this.state = { 
      email: '', 
      password: '',
      isLoading: false
    }
  }

  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '', 
          password: ''
        })
        this.props.navigation.navigate('Home')
      })
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <View style={styles.container}>  
      <View style={{flex:2,flexDirection:"row",justifyContent:'space-between'}}>
        <Image style={styles.image} source={require("../assets/log2.png")} />
        </View>
       
        <TextInput
          style={styles.inputStyle}
          placeholder="Email"
          value={this.state.email}
          onChangeText={(val) => this.updateInputVal(val, 'email')}
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="Password"
          value={this.state.password}
          onChangeText={(val) => this.updateInputVal(val, 'password')}
          maxLength={15}
          secureTextEntry={true}
        /> 

      <View style={{flex:2,flexDirection:"row",justifyContent:'space-between'}}>  
      <TouchableOpacity style={styles.loginBtn}>
      <Button
          color="#ffffff"
          title="SignIn"
          onPress={() => this.userLogin()}
        />   
      </TouchableOpacity>  
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
        </View>

        <View style={{flex:2,flexDirection:"row",justifyContent:'space-between'}}>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="facebook"
                  onPress={() => {
                    alert('facebook');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>facebook</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="google"
                  onPress={() => {
                    alert('google');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>Google</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="linkedin"
                  onPress={() => {
                    alert('linkedin');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>linkedin</Text>
              </View>
              <View style={{ flexDirection: 'column' }}>
                <SocialIcon
                  type="twitter"
                  onPress={() => {
                    alert('twitter');
                  }}
                />
                <Text style={{ textAlign: 'center' }}>twitter</Text>
              </View>
            </View>

        <View style={{flex:2,flexDirection:"row",justifyContent:'space-between'}}> 
        <Text 
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('Signup')}>
          Don't have account? Click here to signup
        </Text>  
        </View>                        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 35,
    backgroundColor: '#fff'
  },
  inputStyle: {
    width: '100%',
    marginBottom: 10,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 45,
    textAlign: 'center'
  },
  image: {
    marginTop: 10,
    align: 'center',
    justifyContent:'space-between',
    padding:'10'
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "40%",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#001844",
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
});