import React from 'react';
import { View, StyleSheet, StatusBar, ScrollView, Image } from 'react-native';
import { Container, Content, Text, Button, Card, CardItem, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux'
import _ from 'lodash'

import AppBar from './../components/Appbar';

class Events extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    };
    
    this.renderEventList = this.renderEventList.bind(this)
  }
  
  renderEventList(){
    if(!_.isEmpty(this.props.selectedEvents)){
      return _.map(this.props.selectedEvents,(event)=>{
        
        return ( 
          <View key={event._id} style={styles.card}>
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
                <Text>{event.name}</Text>
                <Text note>&#8377;&nbsp;&nbsp;{event.ticket}</Text>
              </View>
            </View>
          </View>
          )

      })
    }
    else{
      return  <Text>Loading..</Text>
    }
  }
  render(){
    const { params } = this.props.navigation.state;

    //Add map function here
    let content = {}
    return (
      <Container style={{paddingTop: 24}}>
        <LinearGradient colors={['#B4D7E8', '#29235B']}  start={{x: 0, y: 0}} end={{x:1,y: 1}}
          style={styles.container}>
          <AppBar title={params.title} left="ios-arrow-back" navigation={this.props.navigation} noShadow={true}
            icon="none" right="none"/>

          <View style={styles.container}>
            <ScrollView>
              <View style={{padding: 10}}>
                {this.renderEventList()}
                {/* Call content her {content}*/}
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
    elevation:4
  },
  cardItem: {

  },
  thumbnail: {
    resizeMode: 'cover',
    width: '100%',
    height: 200,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
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
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  }
})

function mapStateToProps({selectedEvents}){
  return {selectedEvents}
}

export default connect(mapStateToProps)(Events)