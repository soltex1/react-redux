import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'

import PostForm from './PostForm'
import LoadingComponent from '../shared/Loading/Loading'
import { getCategories } from '../../actions/category'
import { getPost } from '../../actions/post'
import Title from '../shared/Title/Title'

function PostUpdate (props) {

  const { isLoadingPost, isLoadingCategories, categories, post } = props

  useEffect(() => {
    if (props.postId && !props.post) {
      props.actions.getPost(props.postId)
    }

    if (!props.categories || props.categories.length === 0) {
      props.actions.getCategories()
    }
  }, [])

  return (<div>
    <Title
      title={'POST UPDATE'}
      subTitle={'edit your story'}
      iconName={'POSTS'}
      path={'/posts'}
      history={props.history}
    />
    {isLoadingPost || isLoadingCategories
      ? <LoadingComponent message={'Posts'} size={20}/>
      : !post
        ? 'Post not found!'
        : <Card style={{ padding: 25 }}>
          <PostForm action={'update'} post={post} categories={categories} {...props} />
        </Card>
    }
  </div>)
}

// Maps the state of the store to the component props.
const mapStateToProps = (state, ownProps) => {

  const postId = ownProps.match.params.id

  return {
    postId,
    post: postId && state.posts
      ? state.posts.data.find((post) => post.id === postId)
      : undefined,
    categories: state.categories.data,
    isLoadingPost: state.posts.isLoading,
    isLoadingCategories: state.categories.isLoading,
    error: state.posts.error
  }
}

// Binds the action creators and maps them to the actions prop
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    Object.assign({}, {
      getCategories,
      getPost
    }),
    dispatch
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(PostUpdate)
