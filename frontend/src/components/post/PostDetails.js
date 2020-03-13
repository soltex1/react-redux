import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import EditIcon from '@material-ui/icons/Edit'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import PostActionDialog from './PostActionDialog'
import { getPost } from '../../actions/post'
import CommentContainer from '../comment/CommentContainer'
import timeDifference from '../../utils/date'
import LoadingComponent from '../shared/Loading/Loading'
import Title from '../shared/Title'

const useStyles = makeStyles(theme => ({
  root: {
    margin: 5,
    padding: 15,
  },
  table: {
    boxShadow: 'none',
    minWidth: 650,
    borderBottom: 'none'
  },
  controls: {
    display: 'flex',
    marginTop: theme.spacing(2),
    justifyContent: 'flex-end',
  },
  icon: {
    marginRight: 5
  }
}))

function PostDetails (props) {

  const { actions, isLoading, postId, post } = props

  useEffect(() => {
    if (postId && !post) {
      actions.getPost(postId)
    }
  }, [])
  const classes = useStyles()

  return <div>
    <Title
      title={'POST DETAILS'}
      subTitle={'find out more about this story'}
      iconName={'POSTS'}
      path={'/posts'}
      history={props.history}
    />
    {isLoading
      ? <LoadingComponent message={'Loading Post'} size={20}/>
      : post
        ? <div>
          <Card className={classes.root} elevation={0}>
            <Grid spacing={3} container>
              <Grid item xs={6}>Id</Grid>
              <Grid item xs={6}>{post.id}</Grid>
              <Grid item xs={6}>Date</Grid>
              <Grid item xs={6}>{timeDifference(Date.now(), new Date(post.timestamp))}</Grid>
              <Grid item xs={6}>Title</Grid>
              <Grid item xs={6}>{post.title}</Grid>
              <Grid item xs={6}>Body</Grid>
              <Grid item xs={6}>{post.body}</Grid>
              <Grid item xs={6}>Author</Grid>
              <Grid item xs={6}>{post.author}</Grid>
              <Grid item xs={6}>Category</Grid>
              <Grid item xs={6}>{post.category}</Grid>
              <Grid item xs={6}>Votes</Grid>
              <Grid item xs={6}>{post.voteScore}</Grid>
              <Grid item xs={6}>Comments</Grid>
              <Grid item xs={6}>{post.commentCount}</Grid>
              <Grid style={{ paddingLeft: '20px' }} item xs={12}>
                <div className={classes.controls}>
                  <Button
                    className={classes.icon}
                    color="primary"
                    onClick={() => props.history.push(`/posts/${postId}/update`)}>
                    <EditIcon/> edit
                  </Button>
                  <PostActionDialog postId={postId} {...props} />
                </div>
              </Grid>

            </Grid>
          </Card>
          <CommentContainer postId={postId} {...props} />
        </div>
        : 'post not found'
    }
  </div>
}

// Maps the state of the store to the component props.
const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.id
  return {
    post: postId ? state.posts.data.find((post) => post.id === postId) : undefined,
    postId,
    isLoading: state.posts.isLoading
  }
}

// Binds the action creators and maps them to the actions prop
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    Object.assign({}, {
      getPost
    }),
    dispatch
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)
