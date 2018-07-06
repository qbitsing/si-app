import React, {Component} from 'react'
import store from './src/redux/store'
import {Provider} from 'react-redux'
import Main from './src'

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    )
  }
}

export default App
