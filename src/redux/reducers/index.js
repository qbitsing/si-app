import app from './appReducer'
import navigation from './navigationReducer'
import {combineReducers} from 'redux'

const reducer = combineReducers({
  app,
  navigation
})

export default reducer
