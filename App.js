import React, {Component} from 'react'
import { StackNavigator } from 'react-navigation'
import {router, config} from './router'
import {Provider} from 'react-redux'

const AppStackNavigator = StackNavigator(router, config)

class App extends Component {
  render() {
    return (
      <Provider>
      <AppStackNavigator/>
      </Provider>
    )
  }
}

export default App
