import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Test from '../views/test/router'
import NotFound from '../error/404'
import '../electron/menu/index'
import '../electron/dialog/index'
// 解决无法使用hashHistory
// import * as history from "history";
// const customHistory = history.createBrowserHistory();
// history={customHistory}
export default () => (
    <Router >
    <Route exact path="/" render={
      () => {
         return (<Redirect to="/test"></Redirect>)
      }
    }></Route>
      <Switch>
        <Route path="/test" component={Test}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  )