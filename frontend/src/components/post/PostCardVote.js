import React from 'react'
import Button from '@material-ui/core/Button'
import UpIcon from '@material-ui/icons/KeyboardArrowUp'
import DownIcon from '@material-ui/icons/KeyboardArrowDown'
import { makeStyles } from '@material-ui/core/styles'

import kFormatter from '../../utils/number'
import { bindActionCreators } from 'redux'
import { updateVotingScore } from '../../actions/post'
import { connect } from 'react-redux'

const useStyles = makeStyles({
  votes: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '10%',
    justifyContent: 'center'
  },
  description: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#3f51b5'
  }
})

function PostCardVote (props) {

  const { postId, voteScore, actions } = props
  const classes = useStyles()

  return (
    <div className={classes.votes}>
      <Button color="primary" onClick={() => actions.updateVotingScore(postId, 'upVote')}>
        <UpIcon/>
      </Button>
      <div className={classes.description}>
            <span className="MuiButton-label">
              {kFormatter(voteScore, 4)}
            </span>
      </div>
      <Button color="primary" onClick={() => actions.updateVotingScore(postId, 'downVote')}>
        <DownIcon/>
      </Button>
    </div>
  )
}

// Binds the action creators and maps them to the actions prop
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    Object.assign({}, {
      updateVotingScore
    }),
    dispatch
  )
})

export default connect(null, mapDispatchToProps)(PostCardVote)

