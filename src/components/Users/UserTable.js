import React from 'react'
import {Table} from "antd"
import {columns, data} from "../../demo-data/antd-table"
import TopNav from '../TopNav'

const UserTable = () => {
  return (
    <div>
      <TopNav></TopNav>
      <Table columns={columns} dataSource={data}></Table>
    </div>
  )
}

export default UserTable
