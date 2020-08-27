import React, { Component } from 'react'
import Sidebar from './sidebar/index'
import ChartRoom from './chart-room/index'
import {Layout} from 'antd'
import './index.less'
const {Sider, Content} = Layout 
export default class Chart extends Component {
  render() {
    return (
      <Layout className="chart-content">
        <Sider className="chart-sidebar-left">
          <Sidebar></Sidebar>
        </Sider>
        <Content>
          <ChartRoom></ChartRoom>
        </Content>
      </Layout>
    )
  }
}