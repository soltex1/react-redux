import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import CommentIcon from '@material-ui/icons/Comment'
import EditIcon from '@material-ui/icons/Edit'

import kFormatter from '../../utils/number'
import PostActionDialog from './PostActionDialog'

const useStyles = makeStyles(theme => ({
  controls: {
    display: 'flex',
    marginTop: theme.spacing(2),
    justifyContent: 'flex-end',
  },
  icon: {
    marginRight: '5px'
  }
}))

function PostCardActions ({ history, postId, commentCount }) {

  const classes = useStyles()

  return (
    <div className={classes.controls}>
      <Button>
        <CommentIcon className={classes.icon}/>{kFormatter(commentCount, 4)}
      </Button>
      <Button color="primary" onClick={() => history.push(`/posts/${postId}/update`)}>
        <EditIcon className={classes.icon}/> edit
      </Button>
      <PostActionDialog postId={postId} history={history}/>
    </div>
  )
}

export default PostCardActions
