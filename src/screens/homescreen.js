import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Image, StatusBar, TouchableOpacity } from 'react-native';
import { Container, Content, Text, Card, CardItem, Footer, FooterTab, Button, Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux'
import Appbar from './../components/Appbar';
import {fetchEvents,selectEvents} from './../actions'
const GLOBALS = require('./../globals');

class Homescreen extends React.Component {

  constructor(props){
    super(props)
    this.props.fetchEvents()
  }
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
        this.props.selectEvents(this.props.events,'Main Stage Events')
        this.props.navigation.navigate('events', {title: 'Main Stage Events'})
        break;
      case 1:
        this.props.selectEvents(this.props.events,'Technical Events')
        this.props.navigation.navigate('events', {title: 'Technical Events'})
        break;
      case 2:
        this.props.selectEvents(this.props.events,'Musical Events')
        this.props.navigation.navigate('events', {title: 'Musical Events'})
        break;
      case 3:
        this.props.selectEvents(this.props.events,'Brainstorm Events')
        this.props.navigation.navigate('events', {title: 'Brainstorm Events'})
        break;
      case 4:
        this.props.selectEvents(this.props.events,'Gaming Events')
        this.props.navigation.navigate('events', {title: 'Gaming Events'})
        break;
      case 5:
        this.props.selectEvents(this.props.events,'Creative Events')
        this.props.navigation.navigate('events', {title: 'Creative Events'})
        break;
      case 6:
        this.props.selectEvents(this.props.events,'Sports Events')
        this.props.navigation.navigate('events', {title: 'Sports Events'})
        break;
      case 7:
        this.props.selectEvents(this.props.events,'Fun Events')
        this.props.navigation.navigate('events', {title: 'Fun Events'})
        break;
    }
  }

  render(){
    return(
      <Container>
        
        <LinearGradient colors={['#B4D7E8', '#29235B']}  start={{x: 0, y: 0}} end={{x:1,y: 1}}
          style={styles.container}>
        <StatusBar backgroundColor="rgba(0, 0, 0, 0.0)" barStyle="dark-content" translucent={true}/>
          <View style={{marginTop: 25}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{padding: 10}}>
                <View style={[styles.carousel, {borderRadius: 5}]}>
                  <Text>Sponsors</Text>
                </View>
              </View>
              
              <View style={{backgroundColor:'rgba(255, 255, 255,0.2)'}}>
              <View style={{padding: 5}}>
                <View style={{display:'flex',flexDirection:'row'}}>
                  <View style={{flex:1,marginTop:15}}><Text style={{color: '#fff', fontWeight: '700', fontSize: 15,paddingLeft:10,paddingRight:10,textAlign:'left'}}>COMBOS</Text></View>
                
                </View>
              </View>
              
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginBottom:10}}>
                <View style={styles.horizontalCards}>
                <Image source={require('./../assets/main-stage.jpeg')} style={[styles.backImage, {borderRadius: 5}]}/>
                </View>
                <View style={styles.horizontalCards}>
                <Image source={require('./../assets/brain-storm.jpeg')} style={[styles.backImage, {borderRadius: 5}]}/>
                </View>
                <View style={styles.horizontalCards}>
                <Image source={require('./../assets/main-stage.jpeg')} style={[styles.backImage, {borderRadius: 5}]}/>
                </View>
                <View style={styles.horizontalCards}>
                <Image source={require('./../assets/musical.jpeg')} style={[styles.backImage, {borderRadius: 5}]}/>
                </View>
                <View style={styles.horizontalCards}>
                <Image source={require('./../assets/technical.jpeg')} style={[styles.backImage, {borderRadius: 5}]}/>
                </View>
              </ScrollView>
              </View>
              
              <View style={{padding: 5}}>
                <View style={{display:'flex',flexDirection:'row'}}>
                  <View style={{flex:1,marginTop:15}}><Text style={{color: '#fff', fontWeight: '700', fontSize: 15,paddingLeft:10,paddingRight:10,textAlign:'left'}}>EVENTS</Text></View>
                </View>
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
    backgroundColor: '#29235B',
  },
  carousel: {
    padding: 10,
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation:4
  },
  horizontalCards: {
    width: 150,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 15,
    margin: 10,
    elevation:4
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
    color: '#fff',
    fontSize:12
  }
});

function mapStateToProps({events}){
  return {events}
}
export default connect(mapStateToProps,{fetchEvents,selectEvents})(Homescreen)