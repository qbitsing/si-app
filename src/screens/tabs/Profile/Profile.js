import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, Container, Icon, Body, Left, Title, Thumbnail, Header, Button } from 'native-base';
import { StyleSheet, View } from 'react-native'
import { Poppins } from '../../../utils/Fonts'
import TabNavigator from './ProfileTabs'
class Profile extends Component {
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
            <Button onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon type='FontAwesome' name="bars"/>
            </Button>
          </Left>
          <Body>
            <Title></Title>
          </Body>
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
})

function mapStateToProps(state, props) {
  return {
    ...props,
    redux: state.app
  }
}

export default connect(mapStateToProps)(Profile)
