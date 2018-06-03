import React, { Component } from 'react'
import {TabNavigator, TabBarBottom} from 'react-navigation'
import {Text} from 'native-base'
import HomeTab from './tabs/Home'
import ProfileTab from './tabs/Profile'

const AppTabNavigator = TabNavigator(
  {
    Home: {
      screen: HomeTab
    },
    Profile: {
      screen: ProfileTab
    }
  },
  {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#3498db',
      inactiveTintColor: 'gray',
      showLabel: false
    }
  }
)

export default AppTabNavigator