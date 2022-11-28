import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
import ReactDOM from 'react-dom/client'
import { createBrowserHistory } from 'history'
// import {applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'
import userReducer from './redux/user/user.reducer'
import authReducer from './redux/auth/auth.reducer'
import quizReducer from './redux/quiz/quiz.reducer'
const history = createBrowserHistory()
const clientStore = configureStore({
  reducer: { userReducer: userReducer, authReducer: authReducer, quizReducer: quizReducer },
  middleware: [reduxThunk],
})

// hydrateRoot(
//   document.getElementById('root'),
//   <Provider store={clientStore} serverState={preloadedState}>
//     <App />
//   </Provider>
// )

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
const app = (auth) => {
  if (auth) {
  } else {
    const path = (/#!(\/.*)$/.exec(window.location.hash) || [])[1]
    console.log('hit', path)

    if (path) {
      history.replace(path)
    }
    root.render(
      <Provider store={clientStore}>
        <App />
      </Provider>
    )
  }
}
app()
