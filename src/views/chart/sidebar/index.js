import React, { Component } from 'react'
import {Input} from 'antd'
import Avatar from 'antd/lib/avatar/avatar';
const { Search } = Input;


export default class Chart extends Component {
  constructor(props) {
    super(props)
    this.searchText = null
    this.roomList = props.roomList
  }
  handleSearch(e) {
    console.log(e)
  }
  handleEnterButton(e) {
    console.log(e)
  }
  handleClickChartRoom(id, index) {
    this.props.changeRoom(index)
  }
  render() {
    return ( 
      <div className="chart-room">
        <div>
        {
          // onsearch 当点击enter键或者search图标时触发 enterButton事件: 加的时候图标不显示，点击enter触发search事件
        }
          <Search placeholder="请输入筛选内容" onSearch={value => this.handleSearch(value)} enterButton />
        </div>
        <div style={{'textAlign':'left', paddingLeft: '10px'}}>待办</div>
        <div className="chart-room-list">
          {
            this.roomList.map((item, index) => (
              <div onClick={this.handleClickChartRoom.bind(this, item.roomId, index)} key={index} className={ item.checked ? `chart-room-list-children is-check` : 'chart-room-list-children'}>
                <div className="chart-room-list-children-avatar">
                  <Avatar shape="square" size={40} src={item.roomAvatar}></Avatar>
                </div>
                <div className="chart-room-list-children-detail">
                  <p className="chart-room-list-children-detail-title">{item.roomName}</p>
                  <p  className="chart-room-list-children-detail-content">{item.lastestMsg}</p>
                </div>
              </div>
              )
            )}
        </div>
      </div>
      )
  }
}