import React, {Component} from 'react'
import { StackNavigator } from 'react-navigation'
import {router, config} from './src/router'
import { createStore } from 'redux'
import {Provider} from 'react-redux'

const initialState = {
  sesion: {
    username: 'nmarias'
  }
}

const store = createStore(
  state => state,
  initialState
)


const AppStackNavigator = StackNavigator(router, config)

class App extends Component {
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
