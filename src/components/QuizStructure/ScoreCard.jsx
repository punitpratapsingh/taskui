import React from 'react'
import { Row, Col, Button } from 'antd'
import { ScoreChart } from '../index'
import { useNavigate } from 'react-router-dom'

const ScoreCard = (props) => {
  const navigate = useNavigate()

  return (
    <Row gutter={[0, 24]}>
      <Col className="gutter-row" span={24}>
        <Button onClick={() => navigate('/dashboard')}>Back to Dashboard</Button>
      </Col>
      <Col span={24} style={{textAlign:"center"}}> <h1>Quiz Results</h1> </Col>
      <Col span={8}></Col>
      <Col span={8}>
        <ScoreChart />
      </Col>
      <Col span={8}></Col>
    </Row>
  )
}

export default ScoreCard
