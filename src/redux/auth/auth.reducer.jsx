import {
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  SIGNUP_REQUEST,
  SIGNUP_RESPONSE,
  LOGOUT
} from './auth.type'

const INITIAL_STATE = {
  loginLoader: false,
  userDetails: null,
  signUpLoader: false,
  signUpResponse: null,
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loginLoader: true, userDetails: null }
    case LOGIN_RESPONSE:
      return { ...state, loginLoader: false, userDetails: action.payload }
    case SIGNUP_REQUEST:
      return { ...state, signUpLoader: true, signUpResponse: null }
    case SIGNUP_RESPONSE:
      return { ...state, signUpLoader: false, signUpResponse: action.payload }
    case LOGOUT:
        return { ...INITIAL_STATE }
  
    default:
      return state
  }
}

export default authReducer
