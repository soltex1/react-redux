import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CommentForm from './CommentForm'
import CommentsList from './CommentsList'
import { getComments } from '../../actions/comment'
import Loading from '../shared/Loading'
import Title from '../shared/Title'

function CommentContainer (props) {

  const { actions, comments, isLoading, postId } = props

  useEffect(() => {
    if (postId) {
      actions.getComments(postId)
    }
  }, [])

  return (<div>
    <Title title={'COMMENTS'} subTitle={'share opinions'}/>
    {isLoading
      ? <Loading message={'Loading Post'} size={20}/>
      : comments && comments.length
        ? <CommentsList comments={comments}/>
        : 'there is no comments'
    }
    <CommentForm postId={postId} {...props}/>
  </div>)
}

// Maps the state of the store to the component props.
const mapStateToProps = (state, ownProps) => {

  const postId = ownProps.postId

  return {
    postId,
    comments: postId
      ? state.comments.data
        .filter((comment) => comment.parentId === postId) // Filter
        .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)) // Sort by timestmap asc
      : undefined,
    isLoading: state.comments.isLoading,
    error: state.comments.error
  }
}

// Binds the action creators and maps them to the actions prop
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    Object.assign({}, {
      getComments
    }),
    dispatch
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer)
