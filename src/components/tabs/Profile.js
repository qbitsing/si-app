import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  Container,
  Content
} from 'native-base'

import Footer from '../FooterTabs'

class Profile extends Component {
  render() {
    console.log(this.props)
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

function mapStateToProps(state, props) {
  return {
    ...props,
    redux: state
  }
}

export default connect(mapStateToProps)(Profile)
