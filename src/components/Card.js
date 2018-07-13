import React from 'react'
import {
  Image,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native'
import {
  Card,
  CardItem,
  Text
} from 'native-base'
function CardComponent (props) {
  const { data } = props
  const source = {
    uri: data.image
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.pressed}>
        <Card>
          <CardItem cardBody>
            <Image style={styles.image} source={source} />
          </CardItem>
          <CardItem>
            <View>
              <View>
                <Text style={{fontSize: 16}}>{data.bestPrize}</Text>
                <Text style={{fontSize: 13, lineHeight: 13}}>{data.bestBider}</Text>
              </View>
              <Text note>{data.description}</Text>
            </View>
          </CardItem>
        </Card>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '50%'
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    width: null,
    height: 140
  },
  info: {
    flex: 1,
    paddingLeft: 20
  },
  content: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  buttonsContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
})

export default CardComponent
