import { SET_USER, LOADING_LOGIN, LOADING_SIGNUP, SET_REQUEST_VALIDITY } from "./actions"

const initialState = {
    user: {
        category: ''
    },
    loadingLogin: false,
    loadingSignup: false,
    requestIsValid: true
}

export default (state=initialState, action) => {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload
            }
        case LOADING_LOGIN:
            return {
                ...state,
                loadingLogin: !state.loadingLogin
            }
        case LOADING_SIGNUP:
            return {
                ...state,
                loadingSignup: !state.loadingSignup
            }
        case SET_REQUEST_VALIDITY:
            return {
                ...state,
                requestIsValid: action.payload
            }
        default:
            return state
    }
}