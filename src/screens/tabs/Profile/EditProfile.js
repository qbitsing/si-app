import React, {Component} from 'react'
import {Text, View, StyleSheet, TextInput, Button, StatusBar} from 'react-native'
import {Container, Content, Icon, Thumbnail} from 'native-base'
import {PoppinsSemiBold, PoppinsBold, PoppinsMedium} from '../../../utils/Fonts'
import {gray, gray_1, blueTwitter} from '../../../colors'
import {connect} from 'react-redux'

class EditProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: null,
      phone: null,
      username: null,
      document: null,
      name: null,
      city: null,
      lastSesion: null
    }
  }

  changeState = (type, value) => {
    let obj = {}
    obj[type] = value
    this.setState(obj)
  }

  componentDidMount () {
    const lastSesion = this.props.sesion
    const state = {
      ...lastSesion,
      lastSesion
    }
    this.setState(state)
  }
  render() {
    return (
      <Container>
        <StatusBar
          backgroundColor="#dcdde1"
          barStyle="dark-content"
        />
        <View style={styles.header}>
          <Icon style={styles.headerIcon} type="FontAwesome" name="chevron-left" />
          <Text style={styles.headerTitle}>Editar Perfil</Text>
        </View>
        <Content style={styles.formStyles}>
          <View style={styles.heading}>
            <View style={styles.photoSection}>
              <Thumbnail large source={{uri: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=350'}} style={styles.photo} />
              <Button title="Cambiar Foto" style={styles.buttonChangePhoto} color={blueTwitter} />
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
          style={styles.disabled} value={this.state.email} />

          <TextInput placeholder="Ciudad." style={styles.basicInput} 
          value={this.state.city} 
          onChangeText={text => this.changeState('city', text)} />

          <View style={styles.separation}>
            <Button color={blueTwitter} style={styles.buttonChangePhoto} title='Cambiar Contraseña'/>
          </View>
          <View style={styles.separation}>
            <Button color={blueTwitter} style={styles.buttonChangePhoto} title='Activar modo proveedor'/>
          </View>
        </Content>
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
  disabled: {
    ...styles.basicInput,
    color: gray
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
