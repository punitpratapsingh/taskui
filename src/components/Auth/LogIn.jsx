import React, { useEffect, useState, useRef, useContext } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input, Row, Col } from 'antd'
import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/auth/auth.action'
import { useSelector, useDispatch } from 'react-redux'

const LogIn = (props) => {
  const { userDetails } = useSelector((state) => state.authReducer)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    dispatch(login(null, values))
  }
  useEffect(() => {
    if (userDetails) {
      navigate('/dashboard')
    } else {
      navigate('/login')
    }
  }, [userDetails, navigate])

  return (
    <div>
      <Row style={{ marginTop: '5%' }}>
        <Col span={24}>
          <p style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 700 }}>
            Log In
          </p>
        </Col>
        <Col span={8}></Col>
        <Col span={8}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
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
                Log in
              </Button>
              Or <a href="/signup">register now!</a>
            </Form.Item>
          </Form>
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  )
}

export default LogIn
