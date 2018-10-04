import React, {Component} from 'react'
import {Icon} from 'native-base'
import Active from './active'
import History from './history'
import {createMaterialTopTabNavigator} from 'react-navigation'

const RouteConfigs = {
  Active: {
    screen: Active,
    navigationOptions: {
      title: 'Activas'
    }
  },
  History: {
    screen: History,
    navigationOptions: {
      title: 'Finalizadas'
    }
  },
}

const TabNavigatorConfig = {}

const Navigator = createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig)


class Saler extends Component {
  constructor(props) {
    super(props)
  }
  static navigationOptions = () => {
    return {
      title: 'Proveedor',
      tabBarIcon: ({focused, tintColor}) => {
        return <Icon name="cart" style={{color: tintColor}}/>
      }
    }
  }

  render() {
    return <Navigator/>
  }
}

export default Saler
