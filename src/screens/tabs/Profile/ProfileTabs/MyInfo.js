import React, {Component} from 'react'

import {StyleSheet} from 'react-native'
import { List, ListItem, Body, Text, Right, Icon } from 'native-base';
import { gray, blueFacebook } from '../../../../colors';
import { Poppins } from '../../../../utils/Fonts';
import {connect} from 'react-redux'

class MyInfo extends Component {

    capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)
    
    render () {
      let  {sesion} = this.props
      sesion = sesion === null ? {} : sesion
        return (
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
                <Text style={styles.ListItem}>{this.capitalize(sesion.city)}</Text>
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
        )
    }
}

const styles = StyleSheet.create({
  ListItem: {
    color: gray,
    fontSize: 17,
    fontFamily: Poppins
  },
  icon: {
    fontSize:25,
    color: blueFacebook
  },
})

function mapStateToProps(state, props) {
  return {
    ...props,
    sesion: state.app.sesion
  }
}


export default connect(mapStateToProps)(MyInfo)