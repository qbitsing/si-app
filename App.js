import React, {Component} from 'react'
import { StackNavigator } from 'react-navigation'
import {router, config} from './src/router'
import store from './src/redux/store'
import {Provider} from 'react-redux'


const AppStackNavigator = StackNavigator(router, config)

class App extends Component {
  componentWillMount() {
    store.dispatch({
      type: 'SET_ACTIVE_TAB',
      payload: {
        activeTab: 'Categories'
      }
    })
  }
  render() {
    console.log(store.getState())
    return (
      <Provider store={store}>
        <AppStackNavigator/>
      </Provider>
    )
  }
}

export default App
