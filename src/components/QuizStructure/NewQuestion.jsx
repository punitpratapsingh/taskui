import React, { useEffect, useState, useRef } from 'react'
import { Form, Row, Col, Input, Button, Select, Checkbox } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import {addQuestion } from '../../redux/quiz/quiz.action'
import { useNavigate } from 'react-router-dom'

const NewQuestion = (props) => {
  let header = { Authorization: localStorage.getItem('authToken') }
  const { addQuestionSuccess } = useSelector((state) => state.quizReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  useEffect(() => {
    if (addQuestionSuccess) {
      navigate('/dashboard')
    }
  }, [addQuestionSuccess, navigate])


  const onFinish = (values) => {
    let buff = values.ans;
    delete values.ans; 
    values.ans = [buff];
    dispatch(addQuestion(header, values))
  }
  return (
    <Row gutter={[0, 24]}>
      <Col className="gutter-row" span={24}>
        <Button onClick={() => navigate('/dashboard')}>
          Back to Dashboard
        </Button>
      </Col>
      <Col span={6}></Col>
      <Col span={12}>
        <h1>Create a new quiz</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          {' '}
          <Form.Item
            name="question"
            label="Question"
            rules={[
              {
                required: true,
                message: 'Give the quiz a name!',
              },
            ]}
          >
            <Input placeholder="Question name" />
          </Form.Item>
          <Form.Item
            name="difficulty"
            label="Difficulty"
            rules={[
              {
                required: true,
                message: 'Specify Difficulty!',
              },
            ]}
          >
            <Select
              style={{ width: 120 }}
              placeholder="Select"
              options={[
                {
                  value: 1,
                  label: '1',
                },
                {
                  value: 2,
                  label: '2',
                },
                {
                  value: 3,
                  label: '3',
                },
                {
                  value: 4,
                  label: '4',
                },
                {
                  value: 5,
                  label: '5',
                },
                {
                  value: 6,
                  label: '6',
                },
                {
                  value: 7,
                  label: '7',
                },
                {
                  value: 8,
                  label: '8',
                },
                {
                  value: 9,
                  label: '9',
                },
                {
                  value: 10,
                  label: '10',
                },
              ]}
            />
          </Form.Item>
          <Form.Item name="options" label="Options">
            <Input.Group compact>
              <Form.Item
                name={['options', 'option1']}
                noStyle
                rules={[{ required: true, message: 'Option 1 is required' }]}
              >
                <Input style={{ width: '25%' }} placeholder="option 1" />
              </Form.Item>
              <Form.Item
                name={['options', 'option2']}
                noStyle
                rules={[{ required: true, message: 'Option 2 is required' }]}
              >
                <Input style={{ width: '25%' }} placeholder="option 2" />
              </Form.Item>
              <Form.Item
                name={['options', 'option3']}
                noStyle
                rules={[{ required: true, message: 'Option 3 is required' }]}
              >
                <Input style={{ width: '25%' }} placeholder="option 3" />
              </Form.Item>
              <Form.Item
                name={['options', 'option4']}
                noStyle
                rules={[{ required: true, message: 'Option 4 is required' }]}
              >
                <Input style={{ width: '25%' }} placeholder="option 4" />
              </Form.Item>
            </Input.Group>
          </Form.Item>
          <Form.Item
            name="ans"
            label="Answer"
            rules={[
              {
                required: true,
                message: 'Correct Answer.',
              },
            ]}
          >
            <Input placeholder="Specify answer"></Input>
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
      <Col span={6}></Col>
    </Row>
  )
}

export default NewQuestion
