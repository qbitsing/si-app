import React, {Component} from 'react'
import {Text, View, StyleSheet, TextInput, Button, StatusBar} from 'react-native'
import {Container, Content, Icon, Thumbnail} from 'native-base'
import {PoppinsSemiBold, PoppinsBold} from '../../../utils/Fonts'
import {gray, gray_1, blueTwitter} from '../../../colors'
class EditProfile extends Component {
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
              <TextInput placeholder="Username." style={styles.basicInput} />
              <TextInput placeholder="Teléfono." keyboardType='phone-pad' style={styles.basicInput} />
            </View>
          </View>
          <TextInput placeholder="Nombre." style={styles.basicInput} />
          <TextInput placeholder="Email." editable={false} keyboardType='email-address' style={styles.basicInput} />
          <TextInput placeholder="Ciudad." style={styles.basicInput} />
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
    fontFamily: PoppinsSemiBold,
    color: gray_1,
    fontSize: 18,
    marginBottom: 10
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
export default EditProfile
