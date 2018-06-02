import React, {Component} from 'react'
import { Text, View, AsyncStorage } from 'react-native'
import { StackNavigator } from 'react-navigation'
import MainScreen from './components/MainScreen'

async function getSesion () {
  const sesion = await AsyncStorage.getItem('sesion')
  console.warn(sesion)
  return sesion
}

const AppStackNavigator = StackNavigator({
  Main: {
    screen: MainScreen
  }
})

export default class App extends Component {
  render() {
    return (
      <AppStackNavigator/>
    )
  }
}