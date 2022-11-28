import {
  QUESTION_LIST_REQUEST,
  QUESTION_LIST_RESPONSE,
  ADD_QUESTION_REQUEST,
  ADD_QUESTION_RESPONSE,
  ADD_QUIZ_REQUEST,
  ADD_QUIZ_RESPONSE,
  QUIZ_LIST_REQUEST,
  QUIZ_LIST_RESPONSE,
} from './quiz.type'
import axios from 'axios'
const BASE_URL = 'https://quiz-system-backend-ankita.herokuapp.com'

export const questionListRequest = () => {
  return {
    type: QUESTION_LIST_REQUEST,
  }
}
export const questionListResponse = (data) => {
  return {
    type: QUESTION_LIST_RESPONSE,
    payload: data,
  }
}

export const addQuestionRequest = (data) => {
  return {
    type: ADD_QUESTION_REQUEST,
  }
}
export const addQuestionResponse = (data) => {
  return {
    type: ADD_QUESTION_RESPONSE,
    payload: data,
  }
}
export const addQuizRequest = (data) => {
  return {
    type: ADD_QUIZ_REQUEST,
  }
}

export const addQuizResponse = (data) => {
  return {
    type: ADD_QUIZ_RESPONSE,
    payload: data,
  }
}

export const quizListRequest = (data) => {
  return {
    type: QUIZ_LIST_REQUEST,
  }
}

export const quizListResponse = (data) => {
  return {
    type: QUIZ_LIST_RESPONSE,
    payload: data,
  }
}

export const getQuestions = (headers) => (dispatch, getState) => {
  dispatch(questionListRequest())
  axios
    .get(`${BASE_URL}/questionsList`, { headers })
    .then(({ data }) => {
      if (data) {
        dispatch(questionListResponse(data))
      } else {
        dispatch(questionListResponse(null))
      }
    })
    .catch((e) => {
      const errMsg = e.response.data.message || 'Login failed'
      alert(errMsg)
      dispatch(questionListResponse(null))
    })
}

export const getQuiz = (headers) => (dispatch, getState) => {
  dispatch(quizListRequest())
  axios
    .get(`${BASE_URL}/quizList`, { headers })
    .then(({ data }) => {
      if (data) {
        dispatch(quizListResponse(data))
      } else {
        dispatch(quizListResponse(null))
      }
    })
    .catch((e) => {
      const errMsg = e.response.data.message || 'Get quiz failed'
      alert(errMsg)
      dispatch(quizListResponse(null))
    })
}
export const addQuestion = (headers, body) => (dispatch, getState) => {
  dispatch(addQuestionRequest())
  axios
    .post(`${BASE_URL}/newQuestion`, body, { headers })
    .then(({ data }) => {
      if (data) {
        dispatch(addQuestionResponse(data))
      } else {
        dispatch(addQuestionResponse(null))
      }
    })
    .catch((e) => {
      const errMsg = e.response.data.message || 'Add question failed'
      alert(errMsg)
      dispatch(addQuestionResponse(null))
    })
}

export const addQuiz = (headers, body) => (dispatch, getState) => {
  dispatch(addQuizRequest())
  axios
    .post(`${BASE_URL}/newQuiz`, body, { headers })
    .then(({ data }) => {
      if (data) {
        dispatch(addQuizResponse(data))
      } else {
        dispatch(addQuizResponse(null))
      }
    })
    .catch((e) => {
      const errMsg = e.response.data.message || 'Add quiz failed'
      alert(errMsg)
      dispatch(addQuizResponse(null))
    })
}
