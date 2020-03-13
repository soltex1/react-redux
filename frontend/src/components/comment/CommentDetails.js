import React from 'react'
import Button from '@material-ui/core/Button'
import EditIcon from '@material-ui/icons/Edit'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import CommentDeleteActionDialog from './CommentDeleteActionDialog'
import timeDifference from '../../utils/date'

const useStyles = makeStyles(theme => ({
  grid: {
    paddingLeft: '20px'
  },
  controls: {
    display: 'flex',
    marginTop: theme.spacing(2),
    justifyContent: 'flex-end',
  },
}))

function CommentDetails ({ edit, setEdit, comment }) {

  const classes = useStyles()

  return (
    <Grid spacing={3} container>
      <Grid className={classes.grid} item xs={12}>
        <Typography>
          {comment.body}
        </Typography>
      </Grid>
      <Grid className={classes.grid} item xs={12}>
        <Typography>
          commented by user: {comment.author}, {timeDifference(Date.now(), new Date(comment.timestamp))}
        </Typography>
      </Grid>
      <Grid className={classes.grid} item xs={12}>
        <div className={classes.controls}>
          {!edit && <Button style={{ marginRight: 5 }} color="primary" onClick={() => setEdit(true)}>
            <EditIcon/> edit
          </Button>
          }
          <CommentDeleteActionDialog commentId={comment.id}/>
        </div>
      </Grid>
    </Grid>
  )
}

export default CommentDetails
