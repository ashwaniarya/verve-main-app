import React from 'react';
import { StyleSheet, View, StatusBar, Image, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Text } from 'native-base';
const remote = require('./../assets/splash-back.jpg');
const logoURI = require('./../assets/main_logo.png');

export default class Splash extends React.Component {
  
  componentDidMount(){
    let userType = '';
    let removeFromStack;

    removeFromStack = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'homescreen'})
      ]
    })

    setTimeout(() => {
        //navigate('Home');
      this.props.navigation.dispatch(removeFromStack);
    }, 2000);
  }
  
  render(){
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#000' />
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={remote} />
        </View>
        <View style={styles.overlay} />
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logoURI} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'  
  },
  imageContainer : {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  image : {
    flex: 1,
    resizeMode: 'cover'
  },
  logoContainer:{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    backgroundColor: 'transparent',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: '100%',
    height: 250,
    resizeMode: 'stretch'
  },
  overlay : {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    opacity: 0.6
  },
  text: {
    color: '#fff',
    fontSize: 38,
    fontWeight: '900'
  }
})