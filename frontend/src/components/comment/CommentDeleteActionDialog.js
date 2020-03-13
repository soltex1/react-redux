import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import DeleteIcon from '@material-ui/icons/DeleteForever'

import { deleteComment } from '../../actions/comment'

function CommentDeleteActionDialog (props) {

  const [open, setOpen] = React.useState(false)
  const [isDeleting, setIsDeleting] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDelete = async () => {
    setIsDeleting(true)
    await props.actions.deleteComment(props.commentId)
    setIsDeleting(false)
    handleClose()
  }

  return (
    <div>
      <Button style={{ marginRight: 5 }} color="secondary" onClick={handleClickOpen}>
        <DeleteIcon/> delete
      </Button>
      <Dialog
        disableBackdropClick={isDeleting}
        disableEscapeKeyDown={isDeleting}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{'Delete Comment'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the selected comment?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button disabled={isDeleting} onClick={handleClose} color="primary" autoFocus>
            Disagree
          </Button>
          <Button disabled={isDeleting} onClick={handleDelete} color="primary" autoFocus>
            {isDeleting ? 'Deleting...' : 'AGREE'}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

// Binds the action creators and maps them to the actions prop
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    Object.assign({}, {
      deleteComment
    }),
    dispatch
  )
})

export default connect(null, mapDispatchToProps)(CommentDeleteActionDialog)
