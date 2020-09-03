import React, { Component } from 'react'
import { Button } from 'antd';


export default class ChartRoom extends Component {
  constructor(props) {
    super(props)
    this.state = {
      values: '34234234'
    }
  }
  handleSendMessage = () => {
    this.props.sendMessage(this.state.values)
  }
  handleMessageChange(e) {
    this.setState({
      values: e.target.value
    })
    // console.log(this.values)
  }
  render() {
    const { values } = this.state
    return (
      <div className="chart-room-input">
        <div
          contenteditable={true}
          className="chart-room-input-textarea"
          onPressEnter={this.handleSendMessage.bind(this)}
          value={values}
          onChange={this.handleMessageChange.bind(this)}
        ></div>
        <div className="chart-room-input-button">
          <Button type="primary" onClick={this.handleSendMessage.bind(this)}>发送</Button>
        </div>
      </div>
    )
  }
}