import React from 'react'
import {gray} from '../colors'
import {
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native'
import {
  ListItem,
  Left,
  Body,
  Text,
  Icon,
  Right
} from 'native-base'

function listItem (props) {
  const {item} = props
  return (
    <ListItem>
      <Left>
          <Icon style={styles.icon} type="FontAwesome" name={item.icon} />
          <Text style={styles.text}>{item.name}</Text>
      </Left>
      <Right>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
  )
}

const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 5,
    fontSize: 25,
    width: 40,
    color: gray
  },
  text: {
    color: 'gray'
  }
})

export default listItem