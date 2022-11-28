import React, { useEffect, useState, useRef, useContext } from 'react'
import { LockOutlined, UserOutlined, DownOutlined } from '@ant-design/icons'
import { Space, Button, Checkbox, Form, Input, Row, Col, Dropdown } from 'antd'
import { signUp } from '../../redux/auth/auth.action'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Select } from 'antd'

const SignUp = (props) => {
  const { signUpResponse } = useSelector((state) => state.authReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onFinish = (values) => {
    // console.log('Received values of form: ', values)
    dispatch(signUp(null,values))
  }

  useEffect(() => {
    if (signUpResponse) {
      navigate('/login')
    }
  }, [signUpResponse, navigate])

  return (
    <div>
      <Row style={{ marginTop: '5%' }}>
        <Col span={24}>
          <p style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 700 }}>
            Sign Up
          </p>
        </Col>
        <Col span={8}></Col>
        <Col span={8}>
          <Form
            name="signup"
            className="signup-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="type"
              label="Category"
              rules={[
                {
                  required: true,
                  message: 'Please specify a user type!',
                },
              ]}
            >
              <Select
                placeholder="Select"
                options={[
                  {
                    value: 0,
                    label: 'Admin',
                  },
                  {
                    value: 1,
                    label: 'User',
                  }
                ]}
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
              label="Email"
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Sign up
              </Button>
              Or <a href="/login">Login</a>
            </Form.Item>
          </Form>
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  )
}

export default SignUp
