import React, { Component } from 'react'
import Sidebar from './sidebar/index'
import ChartRoom from './chart-room/index'
import {Layout} from 'antd'
import './index.less'
const {Sider, Content} = Layout 
export default class Chart extends Component {
  constructor(props) {
    super(props)
    this.avatar = require('../../assets/img/avator.jpg')
    this.state = {
      roomList: [
        {
          roomId: 1,
          roomName: 123,
          roomAvatar: this.avatar,
          lastestMsg: '1231231232',
          checked: false
        },
        {
          roomId: 2,
          roomName: '123',
          roomAvatar: this.avatar,
          lastestMsg: '1231231232',
          checked: true
        },
        {
          roomId: 3,
          roomName: '123',
          roomAvatar: this.avatar,
          lastestMsg: '1231231232',
          checked: false
        },
        {
          roomId: 4,
          roomName: '123',
          roomAvatar: this.avatar,
          lastestMsg: '1231231232',
          checked: false
        },
        {
          roomId: 5,
          roomName: '123',
          roomAvatar: this.avatar,
          lastestMsg: '1231231232',
          checked: false
        },
        {
          roomId: 6,
          roomName: '123',
          roomAvatar: this.avatar,
          lastestMsg: '1231231232',
          checked: false
        },
        {
          roomId: 7,
          roomName: '123',
          roomAvatar: this.avatar,
          lastestMsg: '1231231232',
          checked: false
        },
        {
          roomId: 8,
          roomName: '123',
          roomAvatar: this.avatar,
          lastestMsg: '1231231232',
          checked: false
        },
        {
          roomId: 9,
          roomName: '123',
          roomAvatar: this.avatar,
          lastestMsg: '1231231232',
          checked: false
        },
        {
          roomId: 10,
          roomName: '123',
          roomAvatar: this.avatar,
          lastestMsg: '1231231232',
          checked: false
        },
        {
          roomId: 11,
          roomName: '123',
          roomAvatar: this.avatar,
          lastestMsg: '1231231232',
          checked: false
        },
        {
          roomId: 12,
          roomName: '123',
          roomAvatar: this.avatar,
          lastestMsg: '1231231232',
          checked: false
        },
        {
          roomId: 13,
          roomName: '123',
          roomAvatar: this.avatar,
          lastestMsg: '1231231232',
          checked: false
        },
        {
          roomId: 14,
          roomName: '123',
          roomAvatar: this.avatar,
          lastestMsg: '1231231232',
          checked: false
        },
        {
          roomId: 15,
          roomName: '123',
          roomAvatar: this.avatar,
          lastestMsg: '1231231232',
          checked: false
        }
      ]
    }
  }
  handleChangeRoom(value) {
    const roomList = this.state.roomList.map((item, index) => {
      item.checked = index === value
      return item
    })
    this.setState({
      roomList
    })
    console.log(this.state.roomList)
  }
  render() {
    const {roomList} = this.state
    return (
      <Layout className="chart-content">
        <Sider className="chart-sidebar-left">
          <Sidebar roomList={roomList} changeRoom={this.handleChangeRoom.bind(this)}></Sidebar>
        </Sider>
        <Content className="chart-sidebar-right-content">
        {
          roomList.map((item, index) => {
              return (<ChartRoom key={index} index={index} item={item} ></ChartRoom>)
          })
        }
        </Content>
      </Layout>
    )
  }
}