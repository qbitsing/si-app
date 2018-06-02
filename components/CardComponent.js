import React, { Component } from 'react'
import {
  Image,
  StyleSheet
} from 'react-native'
import {
  Card,
  View,
  CardItem,
  Thumbnail,
  Body,
  Left,
  H3,
  Text,
  Button,
  Icon,
  Content,
  Right
} from 'native-base'

class CardComponent extends Component {
  render() {
    const source = {
      uri: "https://store.storeimages.cdn-apple.com/4666/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-silver-select-2017?wid=305&hei=358&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1515602510472"
    }
    return (
      <Card>
        <CardItem>
          <Left>
            <Text note>Cierra en 11h</Text>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Left>
            <Image style={styles.image} source={source}/>
          </Left>
          <Body>
            <Content>
                <Text>Tecnología > Celulares</Text>
            </Content>
            <Content>
                <Text note>Quiero un phone X con 124 gb de almacenamiento, 8gb de RAM y color blanco.</Text>
            </Content>
            <Body style={styles.content}>
              <H3>$2'500.000</H3>
              <Text>narias</Text>
            </Body>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Body style={{flex: 1, flexDirection: 'row'}}>
              <Button transparent>
                <Icon name="logo-facebook" style={{color: '#3B5998'}}/>
              </Button>
              <Button transparent>
                <Icon name="logo-twitter" style={{color: '#00aced'}}/>
              </Button>
            </Body>
          </Left>
          <Right style={styles.buttonRight}>
            <Body style={styles.buttonRight}>
              <Button transparent>
                <Icon name="clipboard" style={{color: 'orange'}}/>
              </Button>
            </Body>
          </Right>
        </CardItem>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: 200
  },
  buttonRight: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'flex-end'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red'
  }
})

export default CardComponent
