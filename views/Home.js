import React, { Component } from 'react'
import {Image} from 'react-native'
import {
  Content,
  Card,
  Text,
  CardItem,
  Left,
  Icon,
  Body,
  Thumbnail,
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
            <Text>
              Holaa
            </Text>
          </Body>
          </CardItem>
          <CardItem>
              <Left>
                <Button rounded style={{marginRight:20, backgroundColor: '#1b95e0'}}>
                  <Icon name="logo-twitter" />
                </Button>
                <Button rounded>
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