import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

class App extends React.Component {
    render() {
        return(
            <h1>Apsensa</h1>
        )
    }
}

ReactDOM.render((
    <Router history = {browserHistory}>
      <Route path = "/" component = {App} />
    </Router>
), document.getElementById('app'))