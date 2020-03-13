import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { registerComment, updateComment } from '../../actions/comment'

function CommentForm (props) {
  const { register, handleSubmit } = useForm()
  const onSubmit = async (data, e) => {
    e.preventDefault()
    if (props.comment) {
      props.actions.updateComment(props.comment.id, data)
      props.setEdit(false)
    } else {
      props.actions.registerComment(Object.assign({ parentId: props.postId }, data))
      e.target.reset()
    }
  }

  const handleCancel = () => {
    props.setEdit(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {!props.comment && <TextField
        defaultValue={props.comment ? props.comment.author : ''}
        ref={register}
        id="standard-basic"
        label="Author"
        name="author"
        margin="normal"
        inputRef={register({ required: true })}
        required
        fullWidth
      />}
      <TextField
        defaultValue={props.comment ? props.comment.body : ''}
        ref={register}
        id="standard-basic"
        name="body"
        label="Body"
        margin="normal"
        inputRef={register({ required: true })}
        required
        fullWidth
      />
      <Button
        type="submit"
        style={{ border: '1px solid #432B68', color: '#432B68', marginRight: 15 }}
        variant="outlined"
        color="primary"
      >
        Submit
      </Button>
      {!props.comment &&
      <Button
        type="reset"
        style={{ border: '1px solid #432B68', color: '#432B68', marginRight: 15 }}
        variant="outlined"
        color="primary">
        Reset
      </Button>}
      {props.comment && <Button style={{ color: '#432B68', marginRight: 15 }} onClick={handleCancel} color="primary">
        Cancel
      </Button>
      }
    </form>
  )
}

// Binds the action creators and maps them to the actions prop
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    Object.assign({}, {
      updateComment,
      registerComment
    }),
    dispatch
  )
})

export default connect(null, mapDispatchToProps)(CommentForm)
