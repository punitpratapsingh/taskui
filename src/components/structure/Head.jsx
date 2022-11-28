import React, { useEffect, useState, useRef, useContext } from 'react'
import { Row, Col, Menu, Layout, Dropdown, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { Sprite } from '../../utils/index'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../redux/auth/auth.action'

const HeaderAnt = Layout.Header

const Head = (props) => {
  const { userDetails } = useSelector((state) => state.authReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const logoutAction = () => {
    dispatch(logOut())
  }
  useEffect(() => {
    if (!userDetails) {
      navigate('/login')
    }
  }, [userDetails,navigate])

  const menu = (
    <Menu>
      <Menu.Item
        // onClick={() => {
        //   localStorageRemoveItem(STORAGE_KEYS.AUTH);
        //   logout();
        //   localStorage.clear();
        // }}
        icon={
          <Sprite
            id="exit"
            width={14}
            height={14}
            styles={{ marginRight: '8px', marginBottom: '-2px' }}
          />
        }
      >
        <a
          type="text"
          style={{ color: 'var(--gray)' }}
          onClick={() => logoutAction()}
        >
          Log out
        </a>
      </Menu.Item>
    </Menu>
  )

  return (
    <HeaderAnt className={`header-class`}>
      <Row justify="space-between" align="middle">
        <Col>
          <span style={{ color: 'white', fontSize: '2rem', fontWeight: 700 }}>
            Quiz System
          </span>
        </Col>
        <Col>
          {userDetails ? (
            <div>
              <span style={{ color: 'white', fontSize: '1.3rem' }}>
                {userDetails.email} {userDetails.type === 0 ? "- Admin" : null}
              </span>
              <Dropdown overlay={menu} placement="bottomRight">
                <Button type="link" style={{ padding: '10px', height: '20px' }}>
                  <Sprite
                    width={12}
                    height={12}
                    id="chevron-down"
                    style={{ color: 'var(--gray)' }}
                  />
                </Button>
              </Dropdown>
            </div>
          ) : null}
        </Col>
      </Row>
    </HeaderAnt>
  )
}

export default Head
