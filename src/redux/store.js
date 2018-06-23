import {createStore} from 'redux'
import reducer from './reducers'

const initialState = {
  sesion: null,
  categories: []
}

const store = createStore(
  reducer,
  initialState
)

export default store