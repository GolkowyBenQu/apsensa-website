import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

import App from './components/App'

ReactDOM.render((
    <Router history = {browserHistory}>
      <Route path = "/" component = {App} />
    </Router>
), document.getElementById('app'))