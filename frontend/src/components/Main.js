import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Category from './category'
import Post from './post'
import PostDetails from './post/PostDetails'
import PostUpdate from './post/PostUpdate'
import PostRegister from './post/PostRegister'

function Main () {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Post}/>
          <Route exact path='/posts/new' component={PostRegister}/>
          <Route exact path='/posts/:id' component={PostDetails}/>
          <Route exact path='/posts/:id/update' component={PostUpdate}/>
          <Route path="/categories" component={Category} />
          <Route path="/posts" component={Post}/>
          <Route component={() => <h1> PAGE NOT FOUND </h1>} />
        </Switch>
      </Router>
    </div>
  )
}

export default Main
