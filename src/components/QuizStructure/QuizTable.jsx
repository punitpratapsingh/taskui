import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { getQuiz } from '../../redux/quiz/quiz.action'

const QuizTable = () => {
  let header = { Authorization: localStorage.getItem('authToken') }
  const { quizList } = useSelector((state) => state.quizReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getQuiz(header))
  }, [])

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Attempts',
      dataIndex: 'attempt',
      key: 'attempt',
    },
  ]

  return <Table columns={columns} dataSource={quizList} />
}

export default QuizTable
