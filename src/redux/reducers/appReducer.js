function rootReducer (state = {}, action) {
  switch (action.type) {
    case 'SET_SESION':
    console.log('se está seteando la sesion...')
      return {
        ...state, 
        sesion: action.payload
      }
      break
    case 'SET_HOME':
      return {...state, ...action.payload}
      break
    case 'SET_LOADER':
      return {...state, loader: action.payload}
      break
    case 'SET_CATEGORIES':
      return {...state, ...action.payload}
    break
    default: return state
  }
}

export default rootReducer