import { actionTypes } from '../types/post'
import { v4 as uuidv4 } from 'uuid'

import { asyncFetch } from '../utils/api'

// Delete post
export const deletePost = (postId) => async (dispatch) => {
  try {
    // Send a request to server
    await asyncFetch(
      `http://localhost:3001/posts/${postId}`, {
        method: 'DELETE',
        headers: new Headers({
          'Authorization': 'DUMMY_AUTHORIZATION'
        })
      })

    // Dispatch an action to delete the post on the store
    await dispatch({
      type: actionTypes.DELETE_POST,
      data: {
        postId
      }
    })
  } catch (err) {
    // TODO dispatch a set_error
    return err.response
  } finally {
    // Turn off 'is_loading' flag
    await dispatch({
      type: actionTypes.SET_LOADING,
      data: false
    })
  }
}

// Load post
export const getPost = (postId) => async (dispatch) => {
  try {
    // Turn on 'is_loading' flag
    await dispatch({
      type: actionTypes.SET_LOADING,
      data: true
    })

    // Send a request to server
    const post = await asyncFetch(
      `http://localhost:3001/posts/${postId}`, {
        method: 'GET',
        headers: new Headers({
          'Authorization': 'DUMMY_AUTHORIZATION'
        })
      })

    // Dispatch an action to set the post on the store
    await dispatch({
      type: actionTypes.SET_POST,
      data: post
    })

  } catch (err) {
    // TODO dispatch a set_error
    return err.response
  } finally {
    // Turn off 'is_loading' flag
    await dispatch({
      type: actionTypes.SET_LOADING,
      data: false
    })
  }
}

// Load posts
export const getPosts = () => async (dispatch) => {
  try {
    // Turn on 'is_loading' flag
    await dispatch({
      type: actionTypes.SET_LOADING,
      data: true
    })

    // Send a request to server
    const response = await asyncFetch(
      `http://localhost:3001/posts`, {
        method: 'GET',
        headers: new Headers({
          'Authorization': 'DUMMY_AUTHORIZATION'
        })
      })

    // Dispatch an action to set the posts on the store
    await dispatch({
      type: actionTypes.SET_POSTS,
      data: response
    })
  } catch (err) {
    // TODO dispatch a set_error
    return err.response
  } finally {
    // Turn off 'is_loading' flag
    await dispatch({
      type: actionTypes.SET_LOADING,
      data: false
    })
  }
}

// Update Post
export const updatePost = (postId, postDetails) => async (dispatch) => {
  try {
    // Send a request to server
    const response = await asyncFetch(
      `http://localhost:3001/posts/${postId}`, {
        method: 'PUT',

        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'DUMMY_AUTHORIZATION'
        }),
        body: JSON.stringify(postDetails)
      })

    // Dispatch an action to update the post on the store
    await dispatch({
      type: actionTypes.UPDATE_POST,
      data: response
    })
  } catch (err) {
    // TODO dispatch a set_error
    return err.response
  }
}

// Update voting score
export const updateVotingScore = (postId, action) => async (dispatch) => {
  try {
    // Send a request to server
    const response = await asyncFetch(
      `http://localhost:3001/posts/${postId}`, {
        method: 'POST',

        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'DUMMY_AUTHORIZATION'
        }),
        body: JSON.stringify({
          option: action
        }),
      })

    // Dispatch an action to update the post score on the store
    await dispatch({
      type: actionTypes.UPDATE_SCORE,
      data: {
        postId: response.id,
        voteScore: response.voteScore
      }
    })
  } catch (err) {
    // TODO dispatch a set_error
    return err.response
  }
}

// Registers a post
export const registerPost = (postDetails) => async (dispatch) => {
  try {
    // Send a request to server
    const post = await asyncFetch(
      `http://localhost:3001/posts`, {
        method: 'POST',

        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'DUMMY_AUTHORIZATION'
        }),
        body: JSON.stringify(Object.assign({ timestamp: Date.now(), id: uuidv4() }, postDetails))
      })

    // Dispatch an action to add the post on the store
    await dispatch({
      type: actionTypes.ADD_POST,
      data: post
    })
  } catch (err) {
    // TODO dispatch a set_error
    return err.response
  }
}
