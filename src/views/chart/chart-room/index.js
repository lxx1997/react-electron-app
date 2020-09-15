import React, { Component } from 'react';
import { Layout } from 'antd';
import ChartRoomInput from './components/input';
import ChartRoomContent from './components/content'
const { Header, Footer, Content } = Layout;

export default class ChartRoom extends Component {
  constructor(props) {
    super(props)
    this.values = ''
  }
  handleSendMessage(value) {
    this.refs.chartRoomMsgContent.addMessage(value)
  }
  render() {
    const {item,index} = this.props
    return (
      <Layout className="chart-room-msg" style={item.checked ? {zIndex: '999'} : {}}>
        <Header className="chart-room-msg-header">
          <span>{`<`}</span>
          <span>this is chat room title</span>
        </Header>
        <Content className="chart-room-msg-content">
          <ChartRoomContent ref="chartRoomMsgContent"></ChartRoomContent>
        </Content>
        <Footer className="chart-room-msg-footer">
          <ChartRoomInput
            index={index}
            sendMessage={this.handleSendMessage.bind(this)}
          ></ChartRoomInput>
        </Footer>
      </Layout>
    )
  }
}