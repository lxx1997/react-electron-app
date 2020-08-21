
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import isElectron from 'is-electron'
export default class Test extends Component {
  ShowDialog() {
    if(isElectron()) {
      const ipcRenderer = window.electron.ipcRenderer
      ipcRenderer.send('dialog-show')
    } else {
      console.log('不是electron环境')
    }
  }
  render() {
    return (
      <div>
        this is the first components
        <Link to="/404">404页面</Link>
        <span onClick={this.ShowDialog}>dialog</span>
      </div>
    )
  }
}

