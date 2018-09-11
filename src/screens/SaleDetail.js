import React, {Component} from 'react'
import Swiper from 'react-native-swiper'
import http from '../utils/http'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  StatusBar,
} from 'react-native'
import {NavigationActions} from 'react-navigation'
import {connect} from 'react-redux'
import {Text,Container, Content, Icon, Footer, FooterTab, Button} from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

class SaleDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {}
    }
  }

  goBack = () => {
    this.props.navigation.goBack()
  }
  render() {
    const data = this.props.activeDetail
    const photos = [
      'https://store.storeimages.cdn-apple.com/4666/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone/x/iphone-x-silver-select-2017?wid=305&hei=358&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1515602510472',
      'https://i.kinja-img.com/gawker-media/image/upload/s--FPy3RYSo--/c_scale,f_auto,fl_progressive,q_80,w_800/cur9iivisdrebdoigjna.jpg',
      'https://icdn9.digitaltrends.com/image/apple-iphone-x-17-1500x1000.jpg',
      'https://www.ordenadorpolitico.com/wp-content/uploads/2018/05/iphone-x-54.jpg'
    ]
    return (
      <Container style={styles.wrapper}>
        <StatusBar
          backgroundColor="transparent"
          translucent
        />
        <Content>
          <Swiper style={{height: 250, width: '100%'}}>
          {
            photos.map((uri, index) => 
            <View key={index} style={styles.slide1}>
              <Image style={styles.image} source={{
                uri
              }} />
            </View>
            )
          }
          </Swiper>
          <View style={styles.categoryContainer}>
            <Text style={styles.category}>Categoría > Subcategoría > {data.brand}</Text>
            <Text note>Cierra en {data.time} horas</Text>
          </View>
          <Text style={styles.description}>{data.description}</Text>
          <View style={styles.biddersTitleContent}>
            <Text style={styles.biddersTitle}>OFERTANTES</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.ListItem}>
              <Text style={styles.category}>$1.800.000</Text>
              <View style={styles.info}>
                <Text style={styles.name}>nmarias</Text>
                <Text note>hace 50m</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>¡Pujar!</Text>
            </Button>
          </FooterTab>
        </Footer>
        <View style={styles.header}>
          <LinearGradient colors={['rgba(0,0,0,.5)', 'transparent']} style={styles.header}/>
          <View style={styles.headerBox}>
            <TouchableOpacity style={styles.backButton} onPress={this.goBack}>
              <Icon style={{fontSize: 25,color: '#fff'}} type='FontAwesome' name="chevron-left" />
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  ListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    margin: 8,
    borderRadius: 15,
    elevation: 1
  },
  info: {
    alignItems: 'center'
  },
  name: {
    fontWeight: 'bold',
    color: 'orange'
  },
  header: {
    height: 80,
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    top: 0
  },
  headerBox: {
    marginTop: 15,
  },
  backButton: {
    padding: 15
  },
  wrapper: {
    backgroundColor: '#fff'
  },
  biddersTitleContent: {
    paddingVertical: 10,
    backgroundColor: '#3498db'
  },
  biddersTitle: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
  description: {
    fontSize: 14,
    padding: 10,
    color: 'grey'
  },
  categoryContainer: {
    paddingVertical: 8,
    marginHorizontal: 10,
  },
  category: {
    fontWeight: 'bold',
    color: '#222',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const mapStateToProps = (state, props) => ({
  ...props,
  activeDetail: state.app.activeDetail
})

export default connect(mapStateToProps)(SaleDetail)
