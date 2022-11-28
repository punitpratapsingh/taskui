import { USER_LIST_REQUEST, USER_LIST_RESPONSE } from './user.type'
import axios from 'axios'

const BASE_URL = 'https://quiz-system-backend-ankita.herokuapp.com'

export const userListRequest = () => {
  return {
    type: USER_LIST_REQUEST,
  }
}

export const userListResponse = (data) => {
  return {
    type: USER_LIST_RESPONSE,
    payload: data,
  }
}

export const getUsers = (headers) => (dispatch, getState) => {
  dispatch(userListRequest())
  axios
    .get(`${BASE_URL}/usersList`, { headers })
    .then(({ data }) => {
      if (data) {
        dispatch(userListResponse(data))
      } else {
        dispatch(userListResponse(null))
      }
    })
    .catch((e) => {
      const errMsg = e.response.data.message || 'User list fetch failed'
      alert(errMsg)
      dispatch(userListResponse(null))
    })
}
