import React from 'react';
import { View, StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import { Container, Content, Text, Button, Card, CardItem, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import AppBar from './../components/Appbar';

export default class Events extends React.Component {

  constructor(){
    super();
    this.state = {

    };
  }

  render(){
    const { params } = this.props.navigation.state;

    //Add map function here
    let content = {}
    return (
      <Container style={{paddingTop: 24}}>
        <LinearGradient colors={['#90f4dd', '#3cadc1', '#5b187a']}  start={{x: 0, y: 0}} end={{x:1,y: 1}}
          style={styles.container}>
          <AppBar title={params.title} left="ios-arrow-back" navigation={this.props.navigation} noShadow={true}
            icon="none" right="none"/>

          <View style={styles.container}>
            <ScrollView>
              <View style={{padding: 10}}>
                
                {/* Call content her {content}*/}
                <View style={styles.card}>
                  <View style={styles.cardItem}>
                    <Image source={require('./../assets/gaming.jpeg')} style={styles.thumbnail}/>
                  </View>
                  <View style={styles.fav}>
                    <Icon name="ios-heart" style={{color:"#DD3E3E"}}/>
                    <Text style={{color: '#fff', paddingTop: 2}}>&nbsp;&nbsp;21 Teams</Text>
                  </View>
                  <View style={styles.cardFooter}>
                    <Button small danger style={{marginTop: 5}}>
                      <Text>Book now</Text>
                    </Button>
                    <View>
                      <Text>Solo Music</Text>
                      <Text note>&#8377;&nbsp;&nbsp;200</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.card}>
                  <View style={styles.cardItem}>
                    <Image source={require('./../assets/musical.jpeg')} style={styles.thumbnail}/>
                  </View>
                  <View style={styles.fav}>
                    <Icon name="ios-heart" style={{color:"#DD3E3E"}}/>
                    <Text style={{color: '#fff', paddingTop: 2}}>&nbsp;&nbsp;21 Teams</Text>
                  </View>
                  <View style={styles.cardFooter}>
                    <Button small danger style={{marginTop: 5}}>
                      <Text>Book now</Text>
                    </Button>
                    <View>
                      <Text>Solo Music</Text>
                      <Text note>&#8377;&nbsp;&nbsp;200</Text>
                    </View>
                  </View>
                </View>
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
    flex: 1
  },
  card: {
    borderRadius: 10,
    marginBottom: 15,
  },
  cardItem: {

  },
  thumbnail: {
    resizeMode: 'cover',
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  fav: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    position: 'absolute',
    top: 10,
    right: 10
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  }
})