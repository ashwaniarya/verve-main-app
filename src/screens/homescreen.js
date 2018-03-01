import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Image, StatusBar, TouchableOpacity } from 'react-native';
import { Container, Content, Text, Card, CardItem, Footer, FooterTab, Button, Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationActions } from 'react-navigation';
import Appbar from './../components/Appbar';
const GLOBALS = require('./../globals');

export default class Homescreen extends React.Component {

  handleEventPress(e){
    let action = NavigationActions.navigate({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'events', screenName: 'Events'})
      ]
    });

    let title = ''
    switch(e){
      case 0:
        this.props.navigation.navigate('events', {title: 'Main Stage Events'})
        break;
      case 1:
        this.props.navigation.navigate('events', {title: 'Technical Events'})
        break;
      case 2:
        this.props.navigation.navigate('events', {title: 'Musical Events'})
        break;
      case 3:
        this.props.navigation.navigate('events', {title: 'Brainstorm Events'})
        break;
      case 4:
        this.props.navigation.navigate('events', {title: 'Gaming Events'})
        break;
      case 5:
        this.props.navigation.navigate('events', {title: 'Creative Events'})
        break;
      case 6:
        this.props.navigation.navigate('events', {title: 'Sports Events'})
        break;
      case 7:
        this.props.navigation.navigate('events', {title: 'Fun Events'})
        break;
    }
  }

  render(){
    return(
      <Container>
        
        <LinearGradient colors={['#90f4dd', '#3cadc1', '#5b187a']}  start={{x: 0, y: 0}} end={{x:1,y: 1}}
          style={styles.container}>
        <StatusBar backgroundColor="rgba(0, 0, 0, 0.0)" barStyle="dark-content" translucent={true}/>
          <View style={{marginTop: 25}}>
            <ScrollView>
              <View style={{padding: 10}}>
                <View style={styles.carousel}>
                  <Text>Sponsors</Text>
                </View>
              </View>

              <View style={{alignItems: 'center', padding: 15}}>
                <Text style={{color: '#fff', fontWeight: '700', fontSize: 20}}>COMBOS</Text>
                <Text style={{color: '#fff'}}>"All in Once"</Text>
              </View>

              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.horizontalCards}>
                <Image source={require('./../assets/main-stage.jpeg')} style={[styles.backImage, {borderRadius: 15}]}/>
                </View>
                <View style={styles.horizontalCards}>
                <Image source={require('./../assets/brain-storm.jpeg')} style={[styles.backImage, {borderRadius: 15}]}/>
                </View>
                <View style={styles.horizontalCards}>
                <Image source={require('./../assets/main-stage.jpeg')} style={[styles.backImage, {borderRadius: 15}]}/>
                </View>
                <View style={styles.horizontalCards}>
                <Image source={require('./../assets/musical.jpeg')} style={[styles.backImage, {borderRadius: 15}]}/>
                </View>
                <View style={styles.horizontalCards}>
                <Image source={require('./../assets/technical.jpeg')} style={[styles.backImage, {borderRadius: 15}]}/>
                </View>
              </ScrollView>

              <View style={{alignItems: 'center', padding: 15}}>
                <Text style={{color: '#fff', fontWeight: '700', fontSize: 20}}>EVENTS</Text>
                <Text style={{color: '#fff'}}>"Tap and begin the fun"</Text>
              </View>

              <View style={styles.row}>
                <TouchableOpacity onPress={() => {this.handleEventPress(0)}} activeOpacity={0.8}>
                  <View style={styles.column}>
                    <Image source={require('./../assets/main-stage.jpeg')} style={styles.backImage}/>
                    <View style={styles.caption}>
                      <Text style={styles.captionTitle}>MAIN STAGE</Text>
                      <Text style={styles.captionSubTitles}>World at your foot</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.handleEventPress(1)}} activeOpacity={0.8}>
                  <View style={styles.column}>
                    <Image source={require('./../assets/technical.jpeg')} style={styles.backImage} />
                    <View style={styles.caption}>
                      <Text style={styles.captionTitle}>TECHNICAL</Text>
                      <Text style={styles.captionSubTitles}>Code it on</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.handleEventPress(2)}} activeOpacity={0.8}>
                  <View style={styles.column}>
                    <Image source={require('./../assets/musical.jpeg')} style={styles.backImage} />
                    <View style={styles.caption}>
                      <Text style={styles.captionTitle}>MUSICAL</Text>
                      <Text style={styles.captionSubTitles}>Sing for the moment</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.handleEventPress(3)}} activeOpacity={0.8}>
                  <View style={styles.column}>
                    <Image source={require('./../assets/brain-storm.jpeg')} style={styles.backImage} />
                    <View style={styles.caption}>
                      <Text style={styles.captionTitle}>BRAINSTORM</Text>
                      <Text style={styles.captionSubTitles}>Boost your brain</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.handleEventPress(4)}} activeOpacity={0.8}>
                  <View style={styles.column}>
                    <Image source={require('./../assets/gaming.jpeg')} style={styles.backImage}/>
                    <View style={styles.caption}>
                      <Text style={styles.captionTitle}>GAMING</Text>
                      <Text style={styles.captionSubTitles}>Fire in the hole</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.handleEventPress(5)}} activeOpacity={0.8}>
                  <View style={styles.column}>
                    <Image source={require('./../assets/creative.jpeg')} style={styles.backImage} />
                    <View style={styles.caption}>
                      <Text style={styles.captionTitle}>CREATIVE</Text>
                      <Text style={styles.captionSubTitles}>Swing in the air</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.handleEventPress(6)}} activeOpacity={0.8}>
                  <View style={styles.column}>
                    <Image source={require('./../assets/sports.jpeg')} style={styles.backImage} />
                    <View style={styles.caption}>
                      <Text style={styles.captionTitle}>SPORTS</Text>
                      <Text style={styles.captionSubTitles}>Push that aderlaine</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {this.handleEventPress(7)}} activeOpacity={0.8}>
                  <View style={styles.column}>
                    <Image source={require('./../assets/fun.jpeg')} style={styles.backImage} />
                    <View style={styles.caption}>
                      <Text style={styles.captionTitle}>FUN</Text>
                      <Text style={styles.captionSubTitles}>Relax time</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </LinearGradient>
        
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c12344',
  },
  carousel: {
    padding: 10,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  horizontalCards: {
    width: 150,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 10
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginTop: 10
  },
  column: {
    width: Dimensions.get('window').width*0.5,
    height: 150,
    backgroundColor: '#fff'
  },
  backImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  caption: {
    position: 'absolute',
    top: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width*0.5
  },
  captionTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 20
  },
  captionSubTitles: {
    color: '#fff'
  }
});