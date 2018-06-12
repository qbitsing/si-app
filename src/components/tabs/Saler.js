import React, {Component} from 'react'
import {Container, Content, Text} from 'native-base'
import Footer from './../FooterTabs'

class Saler extends Component {
  render() {
    return(
      <Container>
        <Content>
          <Text>This is the saler view</Text>
        </Content>
        <Footer navigation={this.props.navigation}/>
      </Container>
    )
  }
}

export default Saler
