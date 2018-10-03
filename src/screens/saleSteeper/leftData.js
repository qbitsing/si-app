import React, {Component} from 'react'
import {
  Container,
  Content,
  Footer,
  Right,
  Text,
  Left,
  Button,
  Icon
} from 'native-base'
import http from './../../utils/http'
import mutation from './../../utils/mutations/createSale'
import {StyleSheet, Alert, ScrollView, TouchableOpacity, TextInput, View} from 'react-native'
import {connect} from 'react-redux'
import {gray_1, gray} from '../../colors'
import Header from './../../components/SteeperHeader'
import {NavigationActions} from 'react-navigation'
import ThumbImage from '../../components/ThumbImage'
import { PoppinsMedium } from '../../utils/Fonts'
import HandleImagePicker from '../../utils/showImagePicker'
import ModalPicker from 'react-native-modal-picker'


class LeftData extends Component {

  constructor() {
    super()
    this.state = {
      brand: null,
      description: null,
      quantity: null,
      images: [],
      modal: {
        label: '1 día',
        key: 1
      }
    }
  }

  changueText(key, value) {
    let state = {}
    state[key] = value
    this.setState(state)
  }

  uploadImages = async () => {
    const {images} = this.state
    const photos = images.map(obj => obj.uri)
    let res = await http('upload', { photos })
    return res.json()
  }

  handleCreate = async () => {
    let success = true
    let message = {}
    const photos = (await this.uploadImages()).urls
    console.log(photos)
    this.props.dispatch({
      type: 'SET_LOADER',
      payload: true
    })
    const { brand, description, quantity } = this.state
    const query = mutation({
      brand,
      description,
      quantity,
      subcategory: this.props.newSale.subcategory.id,
      photos,
      uuidUser: this.props.sesion.uuid
    })
    try {
      let res = await http('mutation', query)
      res = await res.json()
      console.log(res)
      if(res.errors) {
        throw new Error(JSON.stringify(res.errors))
      }
      message.title = 'Excelente'
      message.message = 'Subasta creada con éxito'
    } catch(e) {
      console.log(e)
      success = false
      message.title = 'Ooops...'
      message.message = 'Error al crear la subasta'
    }
    Alert.alert(
      message.title,
      message.message,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    )
    this.props.dispatch({
      type: 'SET_LOADER',
      payload: false
    })
    if (success) {
      this.handleCancel()
    }
  }

  handleBack = () => this.props.navigation.goBack()

  handleCancel = () => {
    this.props.dispatch(
      NavigationActions.navigate({ 
        routeName: 'TabsNavigator' 
      })
    )
  }

  handleShowImagePicker = async () => {
    const result = await HandleImagePicker()
    if (result) {
      const wasUpload = this.state.images.filter(img => img.name == result.name).length > 0
      if (!wasUpload) {
        this.setState({
          images: [...this.state.images, result]
        })
      }
    }
  }

  onDelete = (image) => {
    let images = Object.assign([], this.state.images)
    images = images.filter(img => image.name != img.name)
    this.setState({images})
  }

  render() {
    const dataDays =[
      { key: 0, section: true, label: '¿Cuantos queres que dure tu subasta?' },
      { key: 1, label: '1 día' },
      { key: 3, label: '3 días' },
      { key: 7, label: '7 días' },
      { key: 15, label: '15 días' },
      { key: 30, label: '30 días' },
    ]
    const AddPhoto = (
    <View style={styles.btnAddContainer}>
      <TouchableOpacity onPress={this.handleShowImagePicker}>
        <View style={styles.addImageContainer}>
          <Icon name="camera" style={{color: gray, fontSize: 36}}/>
          <Text style={styles.addPhotoText}>Añadir Foto</Text>
        </View>
      </TouchableOpacity>
    </View>
    )
    return (
      <Container>
        <Header handleBack={this.handleBack} title='Descripción'/>
        <Content style={styles.Form}>
            <TextInput placeholder="Marca" style={styles.basicInput}
            onChangeText={e => this.changueText('brand', e)} />
            <TextInput
              multiline={true}
              placeholder="Descripción"
              maxLength={3}
              numberOfLines={3}
              style={styles.basicInput}
              onChangeText={e => this.changueText('description', e)}
              />
            <TextInput placeholder="Cantidad" style={styles.basicInput}
            keyboardType='number-pad'
            onChangeText={e => this.changueText('quantity', e)} />
            <Text style={styles.subTitle}>Días</Text>
            <ModalPicker
              data={dataDays}
              initValue="1 día"
              onChange={(modal)=>{ this.setState({modal})}} />
              
            <Text style={styles.subTitle}>Fotos</Text>
            <View style={styles.imageContainer}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {
                  this.state.images.map((img, index) => (
                    <ThumbImage key={index} delete={() => this.onDelete(img)} uri={img.uri}/>
                  ))
                }
                {
                  this.state.images.length < 6 && AddPhoto
                } 
              </ScrollView>
            </View>
        </Content>
        <Footer style={{backgroundColor: '#34495e'}}>
          <Left>
          <Button onPress={this.handleCancel} transparent>
              <Text style={styles.FooterButtons}>Cancelar</Text>
            </Button>
          </Left>
          <Right>
            <Button transparent onPress={this.handleCreate}>
              <Text style={styles.FooterButtons}>Crear</Text>
            </Button>
          </Right>
        </Footer>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  basicInput: {
    fontFamily: PoppinsMedium,
    color: gray_1,
    fontSize: 18,
  },
  pickerInput: {
    fontFamily: PoppinsMedium,
    color: gray_1,
    fontSize: 18,
    borderWidth:1,
    borderColor:'#ccc',
    padding:10,
    height:30
  },
  subTitle: {
    marginVertical: 10,
    color: gray,
    fontSize: 25,
    fontFamily: PoppinsMedium
  },
  addImageContainer: {
    width: 130,
    height: 130,
    borderColor: gray,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 100,
  },
  btnAddContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 3,
    height: 200,
    flexDirection: 'row',
    alignItems: 'center'
  },
  FooterButtons: {
    color: '#fff',
    fontSize: 14,
    fontFamily: PoppinsMedium
  },
  addPhotoText: {
    fontFamily: PoppinsMedium,
    color: gray,
    fontSize: 18
  },
  Form: {
    marginHorizontal: 15,
  }
})

function mapStateToProps(state, props) {
  return {
    ...props,
    newSale: state.app.newSale,
    sesion: state.app.sesion
  }
}

export default connect(mapStateToProps)(LeftData)
