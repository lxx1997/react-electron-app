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
    const dragbox = Array.from(document.getElementsByClassName('chart-room-input-textarea'))[this.props.index];
    const value = dragbox.innerHTML
    this.props.sendMessage(value)
    dragbox.innerHTML = ''
  }
  base64(file, callback) {
    var reader = new FileReader();
    reader.onloadend = (
        function(e) {
            callback(e.target.result)
        }
    );
    reader.readAsDataURL(file[0]);
  }
  componentDidMount() {
    let _this = this
    const dragbox = document.querySelector('.chart-room-input-textarea');
    dragbox.addEventListener('dragover', function(e) {
      e.preventDefault(); // 必须阻止默认事件
    }, false);
    dragbox.addEventListener('drop', function(e) {
      e.preventDefault(); // 阻止默认事件
      var file = null,
        data = e.dataTransfer.types;
      for (var i = 0; i < data.length; i += 1) {
        if (data[i] === 'Files') {
          file = e.dataTransfer.files; //获取文件
          _this.base64(file, (e) => {
            const img = document.createElement("img")
            img.src = e
            img.style.maxHeight = "200px"
            img.style.maxWidth = "200px"
            dragbox.append(img)
          })
          break;
        }else{
          var text = e.dataTransfer.getData('text/plain');
          dragbox.append(text); //将拖拽的文字添加到容器里
          break;
        }
      }
    }, false);
  }
  render() {
    return (
      <div className="chart-room-input">
        <div
          contentEditable={true}
          className="chart-room-input-textarea"
        ></div>
        <div className="chart-room-input-button">
          <Button type="primary" onClick={this.handleSendMessage.bind(this)}>发送</Button>
        </div>
      </div>
    )
  }
}