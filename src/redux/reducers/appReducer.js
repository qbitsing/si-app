function rootReducer(state = {}, action) {
  const {type, payload} = action
  switch (type) {
    case 'SET_SESION':
      console.log(payload)
      return {
        ...state,
        sesion: payload
      }
    case 'SET_HOME':
      return {...state, ...payload}
    case 'SET_NEWSALE_ITEM':
      return {
        ...state,
        newSale: { ...state.newSale, ...payload }
      }
    case 'SET_NEWSALE':
      return { ...state, ...payload }
    case 'SET_LOADER':
      return {...state, loader: payload}
    case 'SET_CATEGORIES':
      return {...state, ...payload}
    default: return state
  }
}

export default rootReducer
