import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'

import CircularLoading from './CircularLoading'

const useStyles = makeStyles({
  loadingCircle: {
    margin: '0 auto',
    textAlign: 'center',
    width: '100%',
    height: '100%'
  },
  loadingText: {
    margin: '0 auto',
    textAlign: 'center',
    width: '100%',
    marginTop: 10
  }
})

function Loading ({ message, size }) {

  const classes = useStyles()

  return (
    <Grid item xs={12}>
      <div className={classes.loadingCircle}>
        <CircularLoading size={size}/>
        <div className={classes.loadingText}>
          <span>{message}</span>
        </div>
      </div>
    </Grid>
  )
}

export default Loading
