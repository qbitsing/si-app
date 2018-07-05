import React from 'react'
import {gray} from '../colors'
import {
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native'
import {
  Left,
  Text,
  Icon,
  Right
} from 'native-base'

function listItem (props) {
  const {item} = props
  console.log(item)
  return (
    <TouchableOpacity>
      <View style={styles.listItem}>
        <View style={{flexDirection: 'row'}}>
            <Icon style={styles.icon} type="FontAwesome" name='plane' />
            <Text style={styles.text}>{item.name}</Text>
        </View>
        <Right>
          <Icon name="arrow-forward" />
        </Right>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 5,
    fontSize: 25,
    width: 40,
    color: gray
  },
  listItem: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    flexDirection: 'row',
    borderBottomColor: '#000',
    padding: 10
  },
  text: {
    color: 'gray'
  }
})

export default listItem