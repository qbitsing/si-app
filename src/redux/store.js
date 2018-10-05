import {
  createStore,
  applyMiddleware
} from 'redux'
import reducer from './reducers'
import {
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'

const initialState = {
  app: {
    sesion: null,
    loader: false,
    newSale: {
      categorie: {},
      subcateogory: {}
    },
    categories: [],
    sales: [],
    activeDetail: {},
    profileNavigation: {}
  }
}

const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.navigation
)

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(navigationMiddleware),
)

export default store
