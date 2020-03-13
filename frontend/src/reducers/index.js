import { combineReducers } from 'redux'
import category from './category'
import comment from './comment'
import post from './post'

const reducers = combineReducers({
  categories: category,
  comments: comment,
  posts: post
})

export default reducers
