import React, { Component } from 'react'
import {
  Text,
  Icon,
  Container,
  Content
} from 'native-base'

import Footer from '../FooterTabs'

class Profile extends Component {
  render() {
    const { navigation } = this.props
    const sesion = navigation.getParam('sesion')
    return (
      <Container>
        <Content>
          <Text>Hola {sesion.name}</Text>
        </Content>
        <Footer navigation={navigation}/>
      </Container>
    )
  }
}

export default Profile
