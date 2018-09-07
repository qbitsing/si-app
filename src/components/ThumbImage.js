import React from 'react'
import {StyleSheet, Image} from 'react-native'
import { View, Card, CardItem } from 'native-base';
export default (props) => (
  <View style={styles.container}>
      <Card>
      <CardItem cardBody>
        <Image source={{uri: props.uri}} style={{height: 200, width: null, flex: 1}}/>
      </CardItem>
      </Card>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
    width: 200,
    height: 200
  },
  card: {
    flex: 1
  }
})