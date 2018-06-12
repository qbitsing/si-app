import React, { Component } from 'react'
import {StyleSheet} from 'react-native'
import {
  Container,
  Content
} from 'native-base'
import Footer from './../FooterTabs'
import CardComponent from './../CardComponent'
import CategoriesHeader from './../CategoriesHeader'

class Home extends Component {
  render() {
    const data = {
      image: 'https://store.storeimages.cdn-apple.com/4666/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-silver-select-2017?wid=305&hei=358&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1515602510472',
      timeToClose: '11h',
      category: 'Tecnología',
      subcategory: 'Celulares',
      description: 'iPhone x con 128gb de almacenamiento y pantalla grande',
      bestPrize: '$1000.000',
      bestBider: 'nmarias',
      quantity: 2

    }
    return (
      <Container style={styles.container}>
        <Content>
          <CategoriesHeader/>
          <CardComponent data={data}/>
        </Content>
        <Footer navigation={this.props.navigation}/>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default Home