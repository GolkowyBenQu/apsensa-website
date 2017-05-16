import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'

import App from './components/App'
import ProjectDetails from './components/ProjectDetails'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/projekt/:name" component={ProjectDetails}/>
  </Router>
), document.getElementById('app'))