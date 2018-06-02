import React, { Component } from 'react'
import {
  AsyncStorage,
  TextInput,
  View
} from 'react-native'
import {
  Text,
  Button
} from 'native-base'
import api from '../utils/http'
import loginQuery from '../utils/queries/login'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null,
      sesion: null
    }
  }
  changeUSername = (username) => {
    this.setState({
      username
    })
  }
  changePassword = (password) => {
    this.setState({
      password
    })
  }
  submit = async () => {
    // console.warn(this.state)
    let data = {
      email: this.state.username,
      password: this.state.password
    }
    let res = await api('query', loginQuery(data))
    res = await res.json()
    if(!res.erros) {
      console.warn(res.data.singin)
    }
  }
  async componentWillMount() {
    await AsyncStorage.removeItem('sesion')
    let sesion = await AsyncStorage.getItem('sesion')
    sesion = JSON.parse(sesion)
    console.warn(sesion.username)
    this.setState({
      sesion
    })
  }
  render() {
    if (!this.state.sesion) {
      return (
        <View>
          <Text>Login</Text>
          <TextInput 
          placeholder="Username"
          value={this.state.username}
          onChangeText={this.changeUSername}
          />
          <TextInput 
          placeholder="Password"
          value={this.state.password}
          onChangeText={this.changePassword}
          onSubmitEditing={this.submit}
          />
        </View>
      )
    } else {
      return (
        <View>
          <Text>Hola</Text>
        </View>
      )
    }
  }
}

export default Profile
