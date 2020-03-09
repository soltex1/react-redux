import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import store from './store/configuration'
import Category from './components/category'

function App () {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/categories" component={Category}>
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
