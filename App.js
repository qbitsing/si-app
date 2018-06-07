import React, {Component} from 'react'
import { Text, View, AsyncStorage } from 'react-native'
import { StackNavigator } from 'react-navigation'
import HomeTab from './components/tabs/Home'
import LoginScreen from './components/stack/loginScreen'

async function getSesion () {
  const sesion = await AsyncStorage.getItem('sesion')
  console.warn(sesion)
  return sesion
}

const AppStackNavigator = StackNavigator({
  Home: HomeTab,
  Login: LoginScreen,
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