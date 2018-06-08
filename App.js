import React, {Component} from 'react'
import { Text, View, AsyncStorage } from 'react-native'
import { StackNavigator } from 'react-navigation'
import HomeTab from './components/tabs/Home'
import ProfileTab from './components/tabs/Profile'
import SalerTab from './components/tabs/Saler'
import CategoriesTab from './components/tabs/Categories'
import Login from './components/stack/loginScreen'

const AppStackNavigator = StackNavigator({
  Home: HomeTab,
  Profile: ProfileTab,
  Categories: CategoriesTab,
  Saler: SalerTab,
  Login
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