import React, { Component } from 'react'
import {StyleSheet} from 'react-native'
import {
  Container,
  Content,
  Icon
} from 'native-base'
import CardComponent from './../../components/Card'
import CategoriesHeader from './../../components/CategoriesHeader'

class Home extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Inicio',
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon name="home" style={{color: '#fff'}}/>
      }
    }
  } 
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