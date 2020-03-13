import React from 'react'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core/styles'

import CommentForm from './CommentForm'
import CommentDetails from './CommentDetails'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    margin: 5,
    padding: 20,
    minHeight: '200px',
    maxHeight: '200px'
  },
  controls: {
    display: 'flex',
    marginTop: theme.spacing(2),
    justifyContent: 'flex-end',
  },
}))

function CommentCard ({ comment }) {

  const [edit, setEdit] = React.useState(false)
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      {edit
        ? <CommentForm setEdit={setEdit} comment={comment}/>
        : <CommentDetails edit={edit} setEdit={setEdit} comment={comment}/>
      }
    </Card>
  )
}

export default CommentCard
