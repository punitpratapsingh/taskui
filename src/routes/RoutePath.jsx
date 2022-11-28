import React, { memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  LogIn,
  SignUp,
  Dashboard,
  QuizWrapper,
  ScoreCard,
  NewQuiz,
  NewQuestion,
} from '../components/index'

import ProtectedRoute from './PrivateRoutes'
const RoutePath = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute redirectPath="/login">
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/quiz" element={<QuizWrapper />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/score" element={<ScoreCard />} />
      <Route path="/newQuiz" element={<NewQuiz />} />
      <Route path="/newQuestion" element={<NewQuestion />} />
    </Routes>
  )
}

export default memo(RoutePath)
