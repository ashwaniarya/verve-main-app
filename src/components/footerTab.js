import React from 'react';
import {StyleSheet} from 'react-native';
import { Footer, FooterTab, Icon, Button } from 'native-base';
const GLOBALS = require('./../globals');

export default class FooterTabs extends React.Component {

  constructor(){
    super();
    this.state = {
      icon: ['ios-home', 'ios-people-outline', 'ios-information-circle-outline']
    }
  }

  handleTabPress(e){
    switch(e){
      case 0:
        this.setState({
          icon: ['ios-home', 'ios-people-outline', 'ios-information-circle-outline']
        })
        this.props.navigation.navigate('home');
        break;
      case 1:
        this.setState({
          icon: ['ios-home-outline', 'ios-people', 'ios-information-circle-outline']
        })
        this.props.navigation.navigate('pass');
        break;
      case 2:
        this.setState({
          icon: ['ios-home-outline', 'ios-people-outline', 'ios-information-circle']
        })
        this.props.navigation.navigate('about');
    }
  }

  render(){
    return (
      <Footer style={{ backgroundColor: '#fff', elevation: 5}}>
        <FooterTab style={{backgroundColor: GLOBALS.primaryColorDark}}>
          <Button onPress={() => this.handleTabPress(0)}>
            <Icon name={this.state.icon[0]} style={styles.icon}/>
          </Button>
          <Button onPress={() => this.handleTabPress(1)}>
            <Icon name={this.state.icon[1]} style={styles.icon}/>
          </Button>
          <Button onPress={() => this.handleTabPress(2)}>
            <Icon name={this.state.icon[2]} style={styles.icon}/>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    color: '#fff',
    fontSize: 28
  },
}); 