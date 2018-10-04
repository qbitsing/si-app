import React, {Component} from 'react'
import {Text, View, StyleSheet, TextInput, Button, StatusBar, TouchableOpacity} from 'react-native'
import {Container, Content, Icon, Thumbnail} from 'native-base'
import {PoppinsBold, PoppinsMedium} from '../../../utils/Fonts'
import {gray, gray_1, blueTwitter, blueFacebook} from '../../../colors'
import FAB from 'react-native-fab'
import {connect} from 'react-redux'
import showImagePicker from '../../../utils/showImagePicker'

class EditProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: null,
      phone: null,
      username: null,
      document: null,
      name: null,
      image: {},
      city: null,
      lastSesion: null,
      visibleFab: true
    }
  }

  handleChangeImage = async () => {
    const result = await showImagePicker()
    if(result) {
      const image = result
      this.setState({image})
    }
  }

  changeState = (type, value) => {
    let obj = {}
    obj[type] = value
    this.setState(obj)
  }

  fabClick = () => {
    this.setState({
      visibleFab: !this.state.visibleFab
    })
  }
 
  componentDidMount () {
    let lastSesion = this.props.sesion
    if (lastSesion.image) {
      lastSesion.image = {
        uri: lastSesion. image
      }
    }
    const state = {
      ...lastSesion,
      lastSesion
    }
    this.setState(state)
  }
  goBack = () => {
    console.log('you try to back')
    this.props.navigation.goBack()
  }
  render() {
    let source = {}
    if (this.state.image.uri) {
      source.uri = this.state.image.uri
    } else source = require('../../../assets/images/profile.png')
    return (
      <Container>
        <StatusBar
          backgroundColor="#dcdde1"
          barStyle="dark-content"
        />
        <View style={styles.header}>
          <TouchableOpacity onPress={this.goBack}>
            <Icon style={styles.headerIcon} type="FontAwesome" name="chevron-left" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Editar Perfil</Text>
        </View>
        <Content style={styles.formStyles}>
          <View style={styles.heading}>
            <View style={styles.photoSection}>
              <Thumbnail large source={source} style={styles.photo} />
              <Button title="Cambiar Foto" onPress={this.handleChangeImage} style={styles.buttonChangePhoto} color={blueTwitter} />
            </View>
            <View style={styles.inputsInHeading}>
              <TextInput placeholder="Username." style={styles.basicInput}
              value={this.state.username} 
              onChangeText={text => this.changeState('username', text)} />

              <TextInput placeholder="Teléfono." keyboardType='phone-pad' style={styles.basicInput}
               value={this.state.phone} 
               onChangeText={text => this.changeState('phone', text)} />
            </View>
          </View>
          
          <TextInput placeholder="Nombre." style={styles.basicInput}
          value={this.state.name} 
          onChangeText={text => this.changeState('name', text)} />

          <TextInput placeholder="Email." editable={false} keyboardType='email-address' 
          style={styles.basicInput} value={this.state.email} />

          <TextInput placeholder="Ciudad." style={styles.basicInput} 
          value={this.state.city} 
          onChangeText={text => this.changeState('city', text)} />

          {/* <View style={styles.separation}>
            <Button color={blueTwitter} style={styles.buttonChangePhoto} title='Cambiar Contraseña'/>
          </View> */}
          <View style={styles.separation}>
            <Button color={blueTwitter} style={styles.buttonChangePhoto} title='Activar modo proveedor'/>
          </View>
        </Content>
          <FAB visible={this.state.visibleFab} onClickAction={this.fabClick} iconTextColor="#fff"
          buttonColor={blueFacebook} iconTextComponent={<Icon type="FontAwesome" name="check" />} />
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  basicInput: {
    fontFamily: PoppinsMedium,
    color: gray_1,
    fontSize: 18,
    marginBottom: 10
  },
  iconFab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formStyles: {
    paddingHorizontal: 20
  },
  separation: {
    flex: 1,
    marginBottom: 15
  },
  heading: {
    flex:1,
    flexDirection: 'row'
  },
  photoSection: {
    alignItems: 'center',
    width: 140,
    paddingRight: 10,
    marginBottom: 10
  },
  photo: {
    marginBottom: 15
  },
  buttonChangePhoto: {
    flex: 1,
  },
  headerTitle: {
    color: gray,
    fontFamily: PoppinsBold,
    fontSize: 27,
  },
  inputsInHeading: {
    flex: 1,
    justifyContent: 'center'
  },
  headerIcon: {
    color: gray,
    marginRight: 20
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
  }
})

function mapStateToProps (state, props) {
  return {
    ...props,
    sesion: state.app.sesion
  }
}

export default connect(mapStateToProps)(EditProfile)
