function rootReducer (state = {}, action) {
  switch (action.type) {
    case 'SET_SESION':
      return {
        ...state, 
        sesion: action.payload
      }
      break
    case 'SET_HOME':
      return {...state, ...action.payload}
      break
    case 'SET_ACTIVE_TAB':
      return {...state, ...action.payload}
      break
    default: return state
  }
}

export default rootReducer