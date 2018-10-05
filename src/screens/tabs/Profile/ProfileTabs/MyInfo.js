import React, {Component} from 'react'

import {StyleSheet, Button} from 'react-native'
import { List, ListItem, Body, Text, Right, Icon, Container, View } from 'native-base';
import { gray, blueFacebook } from '../../../../colors';
import { Poppins } from '../../../../utils/Fonts';
import {connect} from 'react-redux'
import {NavigationActions, StackActions} from 'react-navigation'

class MyInfo extends Component {

    capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)
    goToEdit = () => {
     console.log(this.props.parentNavigator.navigate('EditProfile'))
    }
    render () {
      let  {sesion} = this.props
      sesion = sesion === null ? {} : sesion
        return (
          <Container style={styles.container}>
            <List style={{marginTop:0}}>
              <ListItem icon>
                <Body >
                  <Text style={styles.ListItem}>{sesion.email}</Text>
                </Body>
                <Right>
                  <Icon style={styles.icon} type='FontAwesome' name="envelope"/>
                </Right>
              </ListItem>
              <ListItem icon>
                <Body >
                  <Text style={styles.ListItem}>{this.capitalize(sesion.city ? sesion.city : '')}</Text>
                </Body>
                <Right>
                  <Icon style={styles.icon} type='FontAwesome' name="map-marker"/>
                </Right>
              </ListItem>
              <ListItem icon>
                <Body >
                  <Text style={styles.ListItem}>{sesion.phone}</Text>
                </Body>
                <Right>
                  <Icon style={styles.icon} type='FontAwesome' name="phone"/>
                </Right>
              </ListItem>
            </List>
            <View style={{padding: 15}}>
              <Button title='Editar informacion del perfil' style={{flex: 1}} onPress={this.goToEdit} />
            </View>
          </Container>
        )
    }
}

const styles = StyleSheet.create({
  ListItem: {
    color: gray,
    fontSize: 17,
    fontFamily: Poppins
  },
  container: {
    backgroundColor: '#fff'
  },
  icon: {
    fontSize:25,
    color: blueFacebook
  },
})

function mapStateToProps(state, props) {
  return {
    ...props,
    sesion: state.app.sesion,
    parentNavigator: state.app.profileNavigation
  }
}


export default connect(mapStateToProps)(MyInfo)