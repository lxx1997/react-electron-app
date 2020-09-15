import React, { Component } from 'react'


export default class ChartRoom extends Component {
  constructor(props) {
    super(props)
    this.addMessage = this.addMessage.bind(this)
    this.state = {
      messages: []
    }
  }
  addMessage(value) {
    const messages = [...this.state.messages, value]
    this.setState({
      messages
    })
    console.log(this.state.messages)
  }
  render() {
    const {messages} = this.state
    return (
      <div className="chart-room-content">
        {
          messages.map((item, index) => {
            return (
              <div key={index} dangerouslySetInnerHTML={{ __html:item}}></div>
            )
          })
        }
      </div>
    )
  }
}