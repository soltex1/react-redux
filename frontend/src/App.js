import React from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

import Header from './components/header'
import Main from './components/Main'
import store from './store/configuration'

function App () {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Header/>
        <CssBaseline/>
        <Container maxWidth="md">
          <Router>
            <Switch>
              <Route path="/" component={Main}/>
            </Switch>
          </Router>
        </Container>
      </React.Fragment>
    </Provider>
  )
}

export default App
