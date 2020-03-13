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

import { deletePost } from '../../actions/post'

function PostActionDialog (props) {

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
    await props.actions.deletePost(props.postId)
    setIsDeleting(false)
    handleClose()
    props.history.push('/posts')
  }

  return (
    <div>
      <Button color="secondary" onClick={handleClickOpen}>
        <DeleteIcon style={{ marginRight: '5px' }}/> delete
      </Button>
      <Dialog
        disableBackdropClick={isDeleting}
        disableEscapeKeyDown={isDeleting}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{'Delete Post'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the selected post?
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
      deletePost
    }),
    dispatch
  )
})

export default connect(null, mapDispatchToProps)(PostActionDialog)
