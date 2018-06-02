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
class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      sesion: null
    }
  }
  changeUSername = (username) => {
    this.setState({
      username
    })
  }
  submit = () => {
    // console.warn(this.state)
    let sesion = {
      username: this.state.username
    }
    sesion = JSON.stringify(sesion)
    console.warn(sesion)
    AsyncStorage.setItem('sesion', sesion)
  }
  async componentWillMount() {
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
