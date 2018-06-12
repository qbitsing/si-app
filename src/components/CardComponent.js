import React, { Component } from 'react'
import {
  Image,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native'
import {
  Card,
  CardItem,
  Left,
  H3,
  Text,
  Button,
  Icon
} from 'native-base'

class CardComponent extends Component {
  render() {
    const { data } = this.props
    const source = {
      uri: data.image
    }
    return (
      <View>
        <TouchableOpacity>
          <Card>
            <CardItem>
              <Left>
                <Text note>Cierra en {data.timeToClose}</Text>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <View style={styles.body}>
                <View>
                  <Image style={styles.image} source={source}/>
                </View>
                <View style={styles.info}>
                    <View>
                        <Text>{data.category} > {data.subcategory}</Text>
                        <Text note>{data.description}</Text>
                        <Text>Cantidad: {data.quantity}</Text>
                    </View>
                    <View style={styles.content}>
                      <H3>{data.bestPrize}</H3>
                      <Text>{data.bestBider}</Text>
                    </View>
                </View>
              </View>
            </CardItem>
            <CardItem>
              <View style={styles.buttonsContainer}>
                <View style={styles.row}>
                  <Button transparent>
                    <Icon type="FontAwesome" name="facebook" style={{color: '#3B5998'}}/>
                  </Button>
                  <Button transparent>
                    <Icon name="logo-twitter" style={{color: '#00aced'}}/>
                  </Button>
                </View>
                <View>
                  <Button transparent>
                    <Icon name="clipboard" style={{color: 'orange'}}/>
                  </Button>
                </View>
              </View>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: 130,
    height: 200
  },
  body: {
    flex: 1,
    paddingHorizontal: 5,
    flexDirection: 'row'
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
