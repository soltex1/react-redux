import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'left',
  },
})

function PostCategory ({ category }) {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Chip variant="outlined" color="secondary" label={category} size="small"/>
    </div>
  )
}

export default PostCategory
