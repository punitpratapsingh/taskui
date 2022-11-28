import {
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  SIGNUP_REQUEST,
  SIGNUP_RESPONSE,
  LOGOUT
} from './auth.type'
import axios from 'axios'
const BASE_URL = 'https://quiz-system-backend-ankita.herokuapp.com'

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  }
}
export const loginResponse = (data) => {
  return {
    type: LOGIN_RESPONSE,
    payload: data,
  }
}
export const signUpRequest = () => {
  return {
    type: SIGNUP_REQUEST,
  }
}
export const signUpResponse = (data) => {
  return {
    type: SIGNUP_RESPONSE,
    payload: data,
  }
}
  
export const logOutProcess = (data) => {
  return {
    type: LOGOUT
  }
}  
export const login = (headers, body) => (dispatch, getState) => {
  dispatch(loginRequest())
  axios
    .post(`${BASE_URL}/login`, body, { headers })
    .then(({ data }) => {
      if (data) {
        localStorage.setItem('authToken', (data?.authToken))
        dispatch(loginResponse(data?.userDetails || null))
      } else {
        dispatch(loginResponse(null))
      }
    })
    .catch((e) => {
      const errMsg = e.response.data.message || 'Login failed'
      alert(errMsg)
      dispatch(loginResponse(null))
    })
}

export const signUp = (headers, body) => (dispatch, getState) => {
  dispatch(signUpRequest())
  axios
    .post(`${BASE_URL}/signup`, body, { headers })
    .then(({ data }) => {
      if (data) {
        dispatch(signUpResponse(data))
      } else {
        dispatch(signUpResponse(null))
      }
    })
    .catch((e) => {
      const errMsg = e.response.data.message || 'Signup failed'
      alert(errMsg)
      dispatch(signUpResponse(null))
    })
}
export const logOut = () => (dispatch, getState) => {
  localStorage.clear();
  dispatch(logOutProcess())
}
