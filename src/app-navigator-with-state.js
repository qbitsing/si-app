import React from 'react'
import { connect } from 'react-redux'
import AppNavigator from './router'
import {
  createReactNavigationReduxMiddleware,
  reduxifyNavigator
} from 'react-navigation-redux-helpers'

const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation
)

const ReduxifyApp = reduxifyNavigator(AppNavigator, 'root')

class AppNavigatorWithState extends ReduxifyApp {

}

function mapStateToProps(state) {
  return {
    state: state.navigation
  }
}

export default connect(mapStateToProps)(AppNavigatorWithState)
