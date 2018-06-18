import {createStore} from 'redux'
import reducer from './reducers'

const initialState = {
  sesion: {
    username: 'nmarias'
  },
  activeTab: 'Home'
}

const store = createStore(
  reducer,
  initialState
)

export default store