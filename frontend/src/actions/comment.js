import { v4 as uuidv4 } from 'uuid'

import { actionTypes } from '../types/comment'
import { asyncFetch } from '../utils/api'

// Delete Comment
export const deleteComment = (commentId) => async (dispatch) => {
  try {
    // Send a request to server
    await asyncFetch(
      `http://localhost:3001/comments/${commentId}`, {
        method: 'DELETE',
        headers: new Headers({
          'Authorization': 'DUMMY_AUTHORIZATION'
        })
      })

    // Dispatch an action to delete the comment from the store
    await dispatch({
      type: actionTypes.DELETE_COMMENT,
      data: {
        commentId
      }
    })
  } catch (err) {
    // TODO dispatch a set_error
    return err.response
  }
}

// Load comments
export const getComments = (postId) => async (dispatch) => {
  try {
    // Turn on 'is_loading' flag
    await dispatch({
      type: actionTypes.SET_LOADING,
      data: true
    })

    // Send a request to server
    const comments = await asyncFetch(
      `http://localhost:3001/posts/${postId}/comments`, {
        method: 'GET',
        headers: new Headers({
          'Authorization': 'DUMMY_AUTHORIZATION'
        })
      })

    // Dispatch an action to set the comments on the store
    await dispatch({
      type: actionTypes.SET_COMMENTS,
      data: comments
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

// Updates a comment
export const updateComment = (commentId, commentDetails) => async (dispatch) => {
  try {
    // Send a request to server
    const comment = await asyncFetch(
      `http://localhost:3001/comments/${commentId}`, {
        method: 'PUT',

        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'DUMMY_AUTHORIZATION'
        }),
        body: JSON.stringify(Object.assign({ timestamp: Date.now() }, commentDetails))
      })

    // Dispatch an action to update the comment on the store
    await dispatch({
      type: actionTypes.UPDATE_COMMENT,
      data: comment
    })
  } catch (err) {
    // TODO dispatch a set_error
    return err.response
  }
}

// Registers a comment
export const registerComment = (commentDetails) => async (dispatch) => {
  try {
    // Send a request to server
    const comment = await asyncFetch(
      `http://localhost:3001/comments`, {
        method: 'POST',

        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': 'DUMMY_AUTHORIZATION'
        }),
        body: JSON.stringify(Object.assign({ timestamp: Date.now(), id: uuidv4() }, commentDetails))
      })

    // Dispatch an action to add the comment on the store
    await dispatch({
      type: actionTypes.ADD_COMMENT,
      data: comment
    })
  } catch (err) {
    // TODO dispatch a set_error
    return err.response
  }
}
