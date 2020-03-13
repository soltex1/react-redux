import React from 'react'
import { useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import PostCategory from './PostCategory'
import PostCardVote from './PostCardVote'
import PostCardActions from './PostCartActions'
import timeDifference from '../../utils/date'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    margin: 5,
    padding: 0
  },
  'root:last-child': {
    padding: 0,
    border: 0
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
  },
  content: {
    padding: 15,
    margin: 0,
    '&:last-child': {
      paddingBottom: 5
    }
  }
})

function PostCard ({ post }) {

  const history = useHistory()
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <PostCardVote postId={post.id} voteScore={post.voteScore}/>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <CardActionArea onClick={() => history.push(`/posts/${post.id}`)}>
            <Typography component="h5" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Posted by {post.author} {timeDifference(Date.now(), new Date(post.timestamp))}
            </Typography>
            <PostCategory category={post.category}/>
          </CardActionArea>
          <PostCardActions postId={post.id} commentCount={post.commentCount} history={history}/>
        </CardContent>
      </div>
    </Card>
  )
}

export default PostCard
