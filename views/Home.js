import React, { Component } from 'react'
import {Image, View, Text} from 'react-native'
import {
  Content,
  Card,
  CardItem,
  Left,
  Icon,
  Body,
  Thumbnail,
  H3,
  H2,
  Button,
  Right
} from 'native-base'

class Home extends Component {
  render() {
    return (
      <Content>
        <Card>
          <CardItem cardBody>
          <Left>
            <Image source={{uri: 'https://www.setaswall.com/wp-content/uploads/2017/06/Material-Backgrounds-08-1366-x-768.png'}} style={{height: 180, width: null, flex: 1}}/>
          </Left>
          <Body>
              <Text>Tecnología > Celulares</Text>
              <Text note>Celular nuevo, color negro con 32 gb de almacenamiento. 4 gb de RAM...</Text>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <H2>$750.000</H2>
                <Text>username</Text>
              </View>
          </Body>
          </CardItem>
          <CardItem>
              <Left>
                <Button style={{marginRight:10, backgroundColor: '#1b95e0'}}>
                  <Icon name="logo-twitter" />
                </Button>
                <Button>
                  <Icon name="logo-facebook" />
                </Button>
              </Left>
            <Right>
              <Button rounded style={{backgroundColor: 'orange'}}>
                <Icon name="copy"/>
              </Button>
            </Right>
          </CardItem>
        </Card>
      </Content>
    )
  }
}

export default Home