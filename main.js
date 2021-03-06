import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import promiseMiddleware from 'redux-promise-middleware'

import App from './components/App'
import ProjectDetails from './components/ProjectDetails'
import projectReducers from './reducers/projectReducers'
import projectDetailsReducers from './reducers/projectDetailsReducers'

const reducers = combineReducers({
  projectReducers,
  projectDetailsReducers
})

const store = createStore(
  reducers,
  {},
  applyMiddleware(promiseMiddleware())
)

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/projekt/:name" component={ProjectDetails}/>
    </Router>
  </Provider>
), document.getElementById('app'))