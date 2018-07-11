import React from 'react'
import {
  View,
  ActivityIndicator,
  StyleSheet
} from 'react-native'

const loader = () => (
  <View style={styles.container}>
    <ActivityIndicator
      size='large'
      color='blue' />
  </View>
)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.8)',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default loader
