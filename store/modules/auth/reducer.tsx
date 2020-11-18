const INITIAL_STATE = {
    authenticated: false,
    user: []
}
   
const auth = function reducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'AUTH_STATUS':
        return { ...state, authenticated: true, user: action.user }
        default:
        return state
    }
}

export default auth