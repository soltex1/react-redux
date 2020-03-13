import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

function CircularLoading (props) {
  return (
    <CircularProgress
      style={{ color: props.color ? props.color : 'black' }}
      size={props.size || 40}
    />
  )
}

export default CircularLoading
