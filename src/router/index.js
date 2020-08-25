import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Routers from '../views/index'
import NotFound from '../error/404'
import '../electron/menu/index'
import '../electron/dialog/index'
import './index.less'
import { Layout } from 'antd';
const { Sider, Content } = Layout;
// 解决无法使用hashHistory
// import * as history from "history";
// const customHistory = history.createBrowserHistory();
// history={customHistory}
export default () => (
  <Router >
    <Layout className="react-container">
      <Sider className="sidebar-left">
        <Routers.Sidebar></Routers.Sidebar>
      </Sider>
      <Content>
          <Route exact path="/" render={
            () => {
              return (<Redirect to="/test"></Redirect>)
            }
          }></Route>
            <Switch>
              <Route path="/test" component={Routers.Test}></Route>
              <Route component={NotFound}></Route>
            </Switch>
      </Content>
    </Layout>
  </Router>
  )