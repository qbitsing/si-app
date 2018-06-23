import React, {Component} from 'react'
import {
  Container,
  Content,
  Text
} from 'native-base'
import {StyleSheet} from 'react-native'
import Footer from './../FooterTabs'

class newSale extends Component {
  render() {
    const {navigation} = this.props
    return (
      <Container>
        <Content>
          <Text>Nueva Subasta</Text>

        </Content>
        <Footer activeTab="newSale" navigation={navigation}/>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  
})

export default newSale