import { USER_LIST_REQUEST, USER_LIST_RESPONSE } from './user.type'

const INITIAL_STATE = {
  userListLoader: false,
  userList: null,
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { ...state, userListLoader: true, userList: null }
    case USER_LIST_RESPONSE:
      return { ...state, userListLoader: false, userList: action.payload }
    default:
      return state
  }
}

export default userReducer
