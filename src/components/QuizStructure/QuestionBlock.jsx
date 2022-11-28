import React from 'react'
import { Row, Col, Checkbox, Button, Tag } from 'antd'

const QuestionBlock = (props) => {
  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues)
  }
  return (
    <>
      <p>
        Question 1 <Tag>Difficulty 10</Tag>
      </p>
      <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
        <Row>
          <Col span={24}>
            <Checkbox value="A">A </Checkbox>
          </Col>
          <Col span={24}>
            <Checkbox value="B">B</Checkbox>
          </Col>
          <Col span={24}>
            <Checkbox value="C">C</Checkbox>
          </Col>
          <Col span={24}>
            <Checkbox value="D">D</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    </>
  )
}

export default QuestionBlock
