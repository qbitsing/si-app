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
      this.dispatch('SET_SESION', sesion)
      let categories = await AsyncStorage.getItem('categories')
      if(!categories) {
        console.log('entra')
        categories = await fetch('https://api.mercadolibre.com/sites/MLC/categories')
        categories = await categories.json()
        for ([i, categorie] of categories.entries()) {
          let categorieDetail = await fetch(`https://api.mercadolibre.com/categories/${categorie.id}`)
          categorieDetail = await categorieDetail.json()
          categories[i] = categorieDetail
        }
        await AsyncStorage.setItem('categories', JSON.stringify(categories))
      } else {
        categories = JSON.parse(categories)
      }
      this.dispatch('SET_SCATEGORIES', categories)
      console.log(categories,sesion)
    } catch (e) {
      console.log(e)
    }
  }
  dispatch (type, payload) {
    store.dispatch({
      type,
      payload
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
