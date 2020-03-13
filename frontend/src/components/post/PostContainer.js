import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import PostsActions from './PostsActions'
import PostsList from './PostsList'
import Loading from '../shared/Loading'
import Title from '../shared/Title'
import { getPosts } from '../../actions/post'

function PostContainer (props) {

  const { posts, isLoading } = props

  const showSort = !!(posts && posts.length)

  useEffect(() => {
    if (!posts || posts.length === 0) {
      props.actions.getPosts()
    }
  }, [])

  return (
    <div>
      <Title title={'POSTS'} subTitle={'discover all your stories'}/>
      <PostsActions showSort={showSort} history={props.history}/>
      {isLoading
        ? <Loading message={'Posts'} size={20}/>
        : !posts || posts.length === 0
          ? 'There is no posts'
          : posts && <PostsList posts={props.posts}/>
      }
    </div>
  )
}

// Maps the state of the store to the component props.
const mapStateToProps = (state) => ({
  posts: state.posts.data,
  isLoading: state.posts.isLoading,
  error: state.posts.error
})

// Binds the action creators and maps them to the actions prop
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    Object.assign({}, {
      getPosts
    }),
    dispatch
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)
