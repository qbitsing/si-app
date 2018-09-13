import React, {Component} from 'react'
import {
  Container,
  Content,
  Footer,
  Right,
  Text,
  Left,
  Button,
  Form,
  Item,
  Input,
  Textarea,
  Label,
  View,
  Icon
} from 'native-base'
import http from './../../utils/http'
import mutation from './../../utils/mutations/createSale'
import {StyleSheet, Alert, ScrollView, TouchableOpacity} from 'react-native'
import {connect} from 'react-redux'
import Header from './../../components/SteeperHeader'
import NumericInput from 'react-native-numeric-input'
import {NavigationActions} from 'react-navigation'
import ImagePicker from 'react-native-image-picker'
import ThumbImage from '../../components/ThumbImage'

class LeftData extends Component {

  constructor() {
    super()
    this.state = {
      brand: null,
      description: null,
      quantity: null,
      images: []
    }
  }

  changueText(key, value) {
    let state = {}
    state[key] = value
    this.setState(state)
  }

  handleCreate = async () => {
    let success = true
    let message = {}
    this.props.dispatch({
      type: 'SET_LOADER',
      payload: true
    })
    const {brand, description, quantity} = this.state
    const query = mutation({
      brand,
      description,
      quantity,
      subcategory: this.props.newSale.subcategory.id,
      photos: '',
      uuidUser: this.props.sesion.uuid
    })
    try {
      let res = await http('mutation', query)
      res = await res.json()
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

  handleShowImagePicker = () => {
    const options = {
      title: 'Seleccione una Imagen',
      cancelButtonTitle: 'Cancelar',
      takePhotoButtonTitle: 'Tomar Foto',
      chooseFromLibraryButtonTitle: 'Seleccionar desde la galería',
      mediaType: 'photo'
    }
    ImagePicker.showImagePicker(options, (response) => {
      if (response.data) {
        const objectImg = {
          uri: `data:image/jpeg;base64,${response.data}`,
          name: response.fileName
        }
        const wasUpload = this.state.images.filter((img) => img.name == objectImg.name).length > 0
        if (!wasUpload) {
          this.setState({
            images: [...this.state.images, objectImg]
          })
          console.log(this.state)
        }
      }
    })
  }

  render() {

    return (
      <Container>
        <Header handleBack={this.handleBack} title='Descripción'/>
        <Content>
          <Form style={styles.Form}>
            <Item floatingLabel>
              <Label>Marca</Label>
              <Input onChangeText={(e) => this.changueText('brand', e)} />
            </Item>
            <Textarea 
            onChangeText={(e) => this.changueText('description', e)}
            style={styles.Textarea} 
            rowSpan={4} bordered placeholder="Descripción" />
            <View style={styles.Textarea}>
              <Text style={{marginBottom: 10}}>Cantidad</Text>
              <View>
                <NumericInput
                onChange={value => this.changueText('quantity' ,value)}
                rounded
                iconStyle={{ color: 'white' }}
                rightButtonBackgroundColor='#34495e' 
                leftButtonBackgroundColor='#2c3e50'
                />
              </View>
              <View style={styles.imageContainer}>
                <ScrollView horizontal >
                  {
                    this.state.images.map((img, index) => (
                      <ThumbImage key={index} uri={img.uri}/>
                    ))
                  }
                  <View style={styles.btnAddContainer}>
                    <TouchableOpacity onPress={this.handleShowImagePicker}>
                      <View style={styles.addImageContainer}>
                        <Icon name="camera" style={{color: '#ccc'}}/>
                        <Text>Añadir Foto</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </View>
            </View>
          </Form>
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
  addImageContainer: {
    width: 100,
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
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
    fontSize: 14
  },
  Form: {
    marginHorizontal: 10,
    marginRight: 15
  },
  Textarea: {
    marginLeft: 10,
    marginTop: 10
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
