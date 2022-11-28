import React, { useEffect, useState } from 'react'
import { Switch, Transfer } from 'antd'
import { Form, Row, Col, Input, Button, Tag } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { getQuestions, addQuiz } from '../../redux/quiz/quiz.action'
import { useNavigate } from 'react-router-dom'

const NewQuiz = (props) => {
  let header = { Authorization: localStorage.getItem('authToken') }

  const { questionList, addQuizSuccess } = useSelector(
    (state) => state.quizReducer
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [mockData, setMockData] = useState([])
  const [targetKeys, setTargetKeys] = useState([])

  useEffect(() => {
    if (!questionList) {
      dispatch(getQuestions(header))
    } else {
      getMock(questionList)
    }
  }, [questionList, navigate])

  useEffect(() => {
    if (addQuizSuccess) {
      navigate('/dashboard')
    }
  }, [addQuizSuccess, navigate])

  const getMock = (list) => {
    const tempTargetKeys = []
    const tempMockData = []
    for (let i = 0; i < list.length; i++) {
      const data = {
        key: list[i]._id,
        title: list[i].question,
        description: list[i].difficulty,
        chosen: i % 2 === 0,
      }
      tempMockData.push(data)
    }
    setMockData(tempMockData)
    setTargetKeys(tempTargetKeys)
  }
  const filterOption = (inputValue, option) =>
    option.title.indexOf(inputValue) > -1
  const handleChange = (newTargetKeys) => {
    setTargetKeys(newTargetKeys)
  }
  const handleSearch = (dir, value) => {
    console.log('search:', dir, value)
  }

  const onFinish = (values) => {
    dispatch(addQuiz(header, values))
  }
  const onCancel = (values) => {
    setTargetKeys([])
  }

  return (
    <Row gutter={[0, 24]}>
      <Col className="gutter-row" span={24}>
        <Button onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </Button>
      </Col>
      <Col span={24}>
        <p>Create a new quiz</p>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onAbort={onCancel}
        >
          {' '}
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: 'Give the quiz a name!',
              },
            ]}
          >
            <Input placeholder="name" />
          </Form.Item>
          <Form.Item
            name="questions"
            label="Questions"
            rules={[
              {
                required: true,
                message: 'Please select questions!',
              },
            ]}
          >
            <Transfer
              dataSource={mockData}
              showSearch
              filterOption={filterOption}
              targetKeys={targetKeys}
              onChange={handleChange}
              onSearch={handleSearch}
              render={(item) => item.title}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Save
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="cancel"
              className="login-form-button"
            >
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}

export default NewQuiz
