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

const INITIAL_STATE = {
  questionListLoader: false,
  questionList: null,
  quizListLoader: false,
  quizList: null,
  addQuestionLoader: false,
  addQuestionSuccess: false,
  addQuizLoader: false,
  addQuizSuccess: false,
}

const quizReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QUESTION_LIST_REQUEST:
      return { ...state, questionListLoader: true, questionList: null }
    case QUESTION_LIST_RESPONSE:
      return {
        ...state,
        questionListLoader: false,
        questionList: action.payload,
      }
    case QUIZ_LIST_REQUEST:
      return { ...state, quizListLoader: true, quizList: null }
    case QUIZ_LIST_RESPONSE:
      return { ...state, quizListLoader: false, quizList: action.payload }
    case ADD_QUESTION_REQUEST:
      return { ...state, addQuestionLoader: true, addQuestionSuccess: false }
    case ADD_QUESTION_RESPONSE:
      return { ...state, addQuestionLoader: false, addQuestionSuccess: true }
    case ADD_QUIZ_REQUEST:
      return { ...state, addQuizLoader: true, addQuizSuccess: false }
    case ADD_QUIZ_RESPONSE:
      return { ...state, addQuizLoader: false, addQuizSuccess: true }
    default:
      return state
  }
}

export default quizReducer
