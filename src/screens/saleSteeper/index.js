import React, {Component} from 'react'
import {
  createBottomTabNavigator
} from 'react-navigation'

import CategorieSelect from './selectCategory'

const SteeperNavigator = createBottomTabNavigator(
{
  CategorieSelect
},
{
  navigationOptions: {
    tabBarVisible: false
  }
})

class Steeper extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null
    }
  }
  render() {
    return <SteeperNavigator/>
  }
}

export default Steeper
