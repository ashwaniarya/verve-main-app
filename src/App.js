import React, { Component } from 'react';
import { Root } from 'native-base';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Splash from './screens/splash';
import Events from './screens/events';
import Homescreen from './screens/homescreen';
import FooterTabs from './components/footerTab';
import Pass from './screens/pass';
import About from './screens/about';

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
      animationEnabled: true,
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