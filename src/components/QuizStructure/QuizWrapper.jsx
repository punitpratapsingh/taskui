import React, { useState } from 'react'
import { Card } from 'antd'
import { Row, Col, Checkbox, Button, Tag, Steps, message } from 'antd'
// import { Sprite } from "../utils/index"
import { useNavigate } from 'react-router-dom'
import { QuestionBlock } from '../index'

const QuizWrapper = (props) => {
  const navigate = useNavigate()
  
const steps = [
  {
    content:  <QuestionBlock/>,
  }
]
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }
  const items = steps.map((item) => ({ key: item.title, title: item.title }))
  return (
    <Row gutter={[0, 24]}>
      <Col className="gutter-row" span={24}>
        <Button onClick={() => navigate('/dashboard')}>Back to Dashboard</Button>
      </Col>
      <Col className="gutter-row" span={24}>
        <div className="site-card-border-less-wrapper">
          <Steps current={current} items={items} />
          <div className="steps-content">{steps[current].content}</div>
          <div className="steps-action">
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => navigate('/score')}
              >
                Done
              </Button>
            )}
            {current > 0 && (
              <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                Previous
              </Button>
            )}
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default QuizWrapper
