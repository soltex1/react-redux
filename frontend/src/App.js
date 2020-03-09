import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Category from './components/category'


function App () {
  return (
    <Router>
      <Switch>
        <Route path="/categories" component={Category}>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
