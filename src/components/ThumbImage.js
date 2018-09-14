import React from 'react'
import {StyleSheet, Image, TouchableOpacity} from 'react-native'
import { View, Card, CardItem, Icon } from 'native-base'
export default (props) => (
  <View style={styles.container}>
    <Card style={styles.card}>
      <Image source={{uri: props.uri}} style={{height: 200, width: 200, flex: 1}} />
      <View style={styles.iconContainer}>
        <View>
          <TouchableOpacity onPress={props.delete}>
            <Icon name='close'  style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </Card>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    backgroundColor: 'transparent',
    width: 200,
    height: 200
  },
  iconContainer: {
    width: 50,
    height: 50,
    zIndex: 324324,
    alignItems: 'center',
    position: 'absolute',
    zIndex: 342,
    top: 75,
    left: 75,
    backgroundColor: 'rgba(0,0,0,.5)',
    justifyContent: 'center',
    borderRadius: 50

  },
  icon: {
    color: '#fff'
  },
  card: {
    zIndex: 1,
    flex: 1
  }
})
