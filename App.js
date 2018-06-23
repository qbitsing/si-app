import React, {Component} from 'react'
import { StackNavigator } from 'react-navigation'
import {router, config} from './src/router'
import store from './src/redux/store'
import {Provider} from 'react-redux'
import {AsyncStorage} from 'react-native'


const AppStackNavigator = StackNavigator(router, config)

class App extends Component {
  componentDidMount = async () => {
    try {
      let sesion = await AsyncStorage.getItem('sesion')
      sesion = JSON.parse(sesion)
      console.log(sesion)
      store.dispatch({
        type: 'SET_SESION',
        payload: sesion
      })
    } catch (e) {
      console.log(e)
    }
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
