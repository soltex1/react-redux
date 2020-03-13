import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

import SimpleSelect from './PostsFilter'

const useStyles = makeStyles({
  actions: {
    display: 'flex',
    alignItem: 'flex-end',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  filter: {
    flex: 1,
    padding: '1em',
  },
  new: {
    margin: 5
  }
})

function PostsActions ({ showSort, history }) {

  const classes = useStyles()

  return (
    <div className={classes.actions}>
      <div className={classes.filter}>{showSort && <SimpleSelect/>}</div>
      <div className={classes.new}>
        <Button variant="outlined" color="primary" onClick={() => history.push(`/posts/new`)}>
          NEW
        </Button>
      </div>
    </div>
  )
}

export default PostsActions
