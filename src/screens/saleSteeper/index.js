import React, {Component} from 'react'
import {Text} from 'react-native'
import {
  createBottomTabNavigator
} from 'react-navigation'

const steeperNavigator = createBottomTabNavigator({

})

class Steeper extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null
    }
  }
  render() {
    return <steeperNavigator/>
  }
}

export default Steeper
