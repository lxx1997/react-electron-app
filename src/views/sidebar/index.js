import './index.less'
import React, { Component } from 'react';
import {Avatar} from 'antd'
import { Link } from 'react-router-dom';
export default class Sidebar extends Component {
  constructor(props) {
    super(props)
    this.avatar = require('../../assets/img/avator.jpg')
  }
  render() {
    return (
      <div className="sidebar-container">
        <Avatar shape="square" size={40} src={this.avatar} />
          <div className="sidebar-menu">
            <p><Link to="/chart">聊天</Link></p>
            <p><Link to="/document">文档</Link></p>
          </div>
          <div className="sidebar-setting">
            <p><Link to="/friends">好友</Link></p>
            <p><Link to="/setting">设置</Link></p>
          </div>
          <div className="sidebar-setting">
            <p><Link to="/idcard">身份证识别</Link></p>
            <p><Link to="/setting">设置</Link></p>
          </div>
      </div>
    )
  }
}