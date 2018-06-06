import React, {Component} from 'react'
import { Text, View, AsyncStorage } from 'react-native'
import { StackNavigator } from 'react-navigation'
import MainScreen from './components/MainScreen'
import LoginScreen from './components/loginScreen'

async function getSesion () {
  const sesion = await AsyncStorage.getItem('sesion')
  console.warn(sesion)
  return sesion
}

const AppStackNavigator = StackNavigator({
  Login: LoginScreen,
  Main: MainScreen,
},
{
  navigationOptions: {
    title: 'AppName'
  }
})

export default class App extends Component {
  render() {
    return (
      <AppStackNavigator/>
    )
  }
}