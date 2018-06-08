import React, {Component} from 'react'
import {Container, Content, Text} from 'native-base'
import Footer from './../FooterTabs'

class Categories extends Component {
  render() {
    return(
      <Container>
        <Content>
          <Text>This is the categories view</Text>
        </Content>
        <Footer navigation={this.props.navigation}/>
      </Container>
    )
  }
}

export default Categories
