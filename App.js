import React, { Component } from 'react';
import { Root } from 'native-base';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Splash from './src/screens/splash';
import Events from './src/screens/events';
import Homescreen from './src/screens/homescreen';
import FooterTabs from './src/components/footerTab';
import Pass from './src/screens/pass';
import About from './src/screens/about';

const RootNavigator = StackNavigator({
  splash: {screen: Splash},
  homescreen:   TabNavigator(
    {
      home: {screen: Homescreen},
      pass: {screen: Pass},
      about: {screen: About}
    },
    {
      tabBarPosition: 'bottom',
      tabBarComponent: (props) => <FooterTabs navigation={props.navigation}/>,
      animationEnabled: false,
      swipeEnabled: false
    }
  ),
  events: {screen: Events}
},{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false
  }
});

export default class App extends Component {
  render() {
    return (
      <Root>
        <RootNavigator />
      </Root>
    );
  }
}