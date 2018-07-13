import React from 'react'
import {gray} from '../colors'
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Text
} from 'react-native'

function listItem(props) {
  const {item} = props
  return (
    <TouchableOpacity onPress={() => props.select(item)}>
      <View style={styles.listItem}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text}>{item.name}</Text>
        </View>
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
    padding: 13
  },
  text: {
    color: 'gray'
  }
})

export default listItem
