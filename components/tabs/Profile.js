import React, { Component } from 'react'
import {
  AsyncStorage,
  TextInput,
  View
} from 'react-native'
import {
  Text,
  Icon,
  Button
} from 'native-base'
import api from '../../utils/http'
import loginQuery from '../../utils/queries/login'

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
      let sesion = JSON.stringify(res.data.singin)
      AsyncStorage.setItem('sesion', sesion)
      console.warn('sesion guardada')
    } else {
      console.warn(res.erros)
    }
  }
  async componentWillMount() {
    try {
      let sesion = await AsyncStorage.getItem('sesion')
      sesion = JSON.parse(sesion)
      this.setState({
        sesion
      })
    } catch (e) {
      console.warn(e)
    }
  }
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="person" style={{color: tintColor}} />
    )
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
