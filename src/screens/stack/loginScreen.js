import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  AsyncStorage
} from 'react-native'
import {
  Container,
  Button,
  Text,
  Form,
  Item as FormItem,
  Input,
  Label,
} from 'native-base';
import http from './../../utils/http'
import loginQuery from './../../utils/queries/login'
import { connect } from 'react-redux'
import {blueFacebook} from './../../colors'
import {NavigationActions} from 'react-navigation'

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: null,
      password: null
    }
  }
  static navigationOptions = ({navigation}) => {
    return {
      headerTintColor: 'white',
      headerStyle: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0
      }
    }
  }
  changeText = (e, element) => {
    const state = {}
    state[element] = e
    this.setState(state)
  }
  logIn = async () => {
    this.props.dispatch({
      type: 'SET_LOADER',
      payload: true
    })
    const email = this.state.email.toLowerCase()
    const password = this.state.password
    let res = false
    try {
      res = await http('query', loginQuery({email, password}))
      res = await res.json()
    } catch (e) {
      console.log(e)
    }
    if (res) {
      const { data, errors } = res
      if (errors) console.log(errors)
      else {
        const res = await AsyncStorage.setItem('sesion', JSON.stringify(data.singin))
        const sesion = data.singin
        this.props.dispatch({
          type: 'SET_SESION',
          payload: sesion
        })
        console.log(sesion)
        this.setNavigationSesion('Profile', {sesion})
        this.setNavigationSesion('newSale', {sesion})
        this.props.navigation.navigate('Profile')
      }
    }
    this.props.dispatch({
      type: 'SET_LOADER',
      payload: false
    })
  }

  setNavigationSesion = (key, params) => {
    const setParamsAction = NavigationActions.setParams({
      params,
      key
    })
    this.props.dispatch(setParamsAction)
  }
  render() {
    const logo = 'https://www.iteffect.dk/wp-content/uploads/2018/01/skype-logo.png'
    return (
      <Container>
        <Form style={styles.container}>
          <Image
          style={{width: null, height: 100, resizeMode: 'contain'}} 
          source={{
            uri: logo
          }}/>
          <FormItem floatingLabel>
            <Label style={{color: '#eee'}}>Email</Label>
            <Input  
            onChangeText={(e) => this.changeText(e, 'email')}
            value={this.state.email}
            style={{color: '#eee'}}
            selectionColor="#eee"/>
          </FormItem>
          <FormItem floatingLabel last>
            <Label style={{color: '#eee'}}>Password</Label>
            <Input
            onChangeText={(e) => this.changeText(e, 'password')}
            value={this.state.password}
            onSubmitEditing={this.logIn}
            style={{color: '#eee'}} 
            selectionColor="#eee" 
            secureTextEntry={true} />
          </FormItem>
          <Button onPress={this.logIn} style={styles.button} full light>
            <Text> Login </Text>
          </Button>
          <Text>¿Has olvidado tu contraseña?</Text>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: blueFacebook,
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center'
  },
  button: {
    marginTop: 25
  }
})

export default connect()(LoginScreen)