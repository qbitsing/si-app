import React, {Component} from 'react'
import {View, Text} from 'react-native'

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View>
        <Text>This is the login Screen!</Text>
      </View>
    )
  }
}

export default LoginScreen