import { QuizTable, UserTable } from '../index'
import { Row, Col, Menu, Layout, Dropdown, Button } from 'antd'
import { Sprite } from '../../utils/index'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Dashboard = (props) => {
  const navigate = useNavigate()
  const { userDetails } = useSelector((state) => state.authReducer)

  return (
    <div>
      <Row gutter={[0, 24]}>
        <Col className="gutter-row" span={24}>
          {userDetails && userDetails.type === 1 ? (
            <Button onClick={() => navigate('/quiz')}>
              Take New Quiz &nbsp;
              <Sprite
                width={10}
                height={10}
                id="plus"
                style={{ color: 'var(--gray)' }}
              />
            </Button>
          ) : (
            <>
              <Button onClick={() => navigate('/newQuiz')}>
                Create Quiz &nbsp;
                <Sprite
                  width={10}
                  height={10}
                  id="plus"
                  style={{ color: 'var(--gray)' }}
                />
              </Button>
              <Button onClick={() => navigate('/newQuestion')}>
                Create Question &nbsp;
                <Sprite
                  width={10}
                  height={10}
                  id="plus"
                  style={{ color: 'var(--gray)' }}
                />
              </Button>
            </>
          )}
        </Col>
        <Col className="gutter-row" span={24}>
          <h1>Quiz List</h1>
          <QuizTable />
        </Col>

        {userDetails && userDetails.type === 0 ? (
          <Col className="gutter-row" span={24}>
            <h1>Total Users</h1>
            <UserTable />
          </Col>
        ) : null}
      </Row>
    </div>
  )
}

export default Dashboard
