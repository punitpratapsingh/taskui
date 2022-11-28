import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from '../../redux/user/user.action'

const UserTable = () => {
  let header = { Authorization: localStorage.getItem('authToken') }
  const { userList } = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers(header))
  }, [])

  const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (val) => (val.type === 1 ? 'User' : 'Admin'),
    },
  ]

  return <Table columns={columns} dataSource={userList} />
}

export default UserTable
