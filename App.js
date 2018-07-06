import React, {Component, Fragment} from 'react'
import AppNavigator from './src/app-navigator-with-state'
import store from './src/redux/store'
import {Provider} from 'react-redux'
import {AsyncStorage, BackHandler} from 'react-native'
import { NavigationActions } from 'react-navigation';
import Loader from './src/components/loader'

class App extends Component {
  constructor() {
    super()
    this.state = {
      loader: false
    }
  }
  handleBack () {
    store.dispatch(NavigationActions.back())
    return true
  }
  setLoader(to) {
    this.dispatch('SET_LOADER', to)
    this.setState({
      loader: to
    })
  }
  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBack)
  }
  componentDidMount = async () => {
    this.setLoader(true)
    BackHandler.addEventListener('hardwareBackPress', this.handleBack)
    try {
      let sesion = await AsyncStorage.getItem('sesion')
      sesion = JSON.parse(sesion)
      this.dispatchNavigation('Profile', { sesion })
      this.dispatchNavigation('newSale', { sesion })
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
      this.dispatch('SET_CATEGORIES', {categories})
      console.log(categories,sesion)
    } catch (e) {
      console.log(e)
    }
    this.setLoader(false)
  }
  dispatchNavigation = (key, params) => {
    const setParamsAction = NavigationActions.setParams({
      params,
      key
    })
    store.dispatch(setParamsAction)
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
        <Fragment>
          <AppNavigator/>
          {this.state.loader && <Loader/>}
        </Fragment>
      </Provider>
    )
  }
}

export default App
