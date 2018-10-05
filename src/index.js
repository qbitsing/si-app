import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { AsyncStorage, BackHandler, View, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation';
import AppNavigator from './app-navigator-with-state'
import Loader from './components/loader'
import http from './utils/http';
import query from './utils/queries/getCategories'

class Main extends Component {
  handleBack = () => {
    this.props.dispatch(NavigationActions.back())
    return true
  }
  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBack)
  }
  componentDidMount = async () => {
    this.dispatch('SET_LOADER', true)
    BackHandler.addEventListener('hardwareBackPress', this.handleBack)
    try {
      let sesion = await AsyncStorage.getItem('sesion')
      console.log(sesion)
      sesion = JSON.parse(sesion)
      this.dispatchNavigation('Profile', { sesion })
      this.dispatchNavigation('newSale', { sesion })
      this.dispatch('SET_SESION', sesion)
      let categories = await AsyncStorage.getItem('categories')
      if(!categories) {
        categories = await http('query', query)
        categories = (await categories.json()).data.categories
        await AsyncStorage.setItem('categories', JSON.stringify(categories))
      } else {
        categories = JSON.parse(categories)
      }
      console.log(categories)
      this.dispatch('SET_CATEGORIES', {categories})
    } catch (e) {
    }
    this.dispatch('SET_LOADER', false)
  }
  dispatchNavigation = (key, params) => {
    const setParamsAction = NavigationActions.setParams({
      params,
      key
    })
    this.props.dispatch(setParamsAction)
  }
  dispatch (type, payload) {
    this.props.dispatch({
      type,
      payload
    })
  }

  render() {
    return (
      <Fragment>
        <AppNavigator/>
        {this.props.loader && <Loader/>}
      </Fragment>
    )
  }
}

function mapStateToProps (state) {
  return {
    loader: state.app.loader
  }
}

export default connect(mapStateToProps)(Main)
