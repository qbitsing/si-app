import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, Container, Icon, Body, Left, Thumbnail, Header,  Right } from 'native-base';
import { StyleSheet, View, TouchableOpacity, AsyncStorage } from 'react-native'
import { Poppins, PoppinsMedium } from '../../../utils/Fonts'
import TabNavigator from './ProfileTabs'
import {StackActions, NavigationActions} from 'react-navigation'

class Profile extends Component {

  signOut = async () => {
    let x = await AsyncStorage.removeItem('sesion')
      const resetAction = StackActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({ routeName: 'TabsNavigator' }),
          NavigationActions.navigate({ routeName: 'BeforeLogin' })
        ],
      })
      this.props.dispatch({
        type: 'SET_SESION', 
        payload: null
      })
      this.props.dispatch(resetAction)
  }

  render() {
    let {sesion} = this.props.redux
    sesion = sesion === null ? {} : sesion
    let image
    if (sesion.image) {
      image = {
        uri: sesion.image
      }
    } else image = require('../../../assets/images/profile.png')
    return (
      <Container>
        <Header>
          <Left>
            <Text style={styles.title}>Perfil</Text>
          </Left>
          <Body />
          <Right>
            <TouchableOpacity onPress={this.signOut}>
              <Icon style={{color: '#fff'}} type='FontAwesome' name="sign-out"/>
            </TouchableOpacity>
          </Right>
        </Header>
        <View style={styles.PhotoCard}>  
            <Text style={styles.name}>{sesion.name}</Text>
            <Thumbnail style={{height:100,width:100, borderRadius:100}} source={image} />
        </View>
        <TabNavigator />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  PhotoCard: {
    height:190,
    backgroundColor:'#3B5998',
    alignItems:'center',
    justifyContent: 'center'
  },
  name: {
    color:'white',
    fontFamily: Poppins,
    fontSize:20
  },
  title: {
    fontFamily: PoppinsMedium,
    color: '#fff',
    fontSize: 20,
  }
})

function mapStateToProps(state, props) {
  return {
    ...props,
    redux: state.app
  }
}

export default connect(mapStateToProps)(Profile)
