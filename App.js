import React, {Component} from 'react'
import AppNavigator from './src/app-navigator-with-state'
import store from './src/redux/store'
import {Provider} from 'react-redux'
import {AsyncStorage} from 'react-native'

class App extends Component {
  componentDidMount = async () => {
    console.log(store.getState())
    try {
      let sesion = await AsyncStorage.getItem('sesion')
      sesion = JSON.parse(sesion)
      this.dispatch('SET_SESION', null)
      let categories = await AsyncStorage.getItem('categories')
      categories = { hola: "s" }
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
      this.dispatch('SET_CATEGORIES', {categories})
      console.log(categories,sesion)
    } catch (e) {
      console.log(e)
    }
  }
  dispatch (type, payload) {
    console.log(store)
    store.dispatch({
      type,
      payload
    })
  }
  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    )
  }
}

export default App
