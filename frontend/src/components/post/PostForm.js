import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useForm } from 'react-hook-form'
import EditIcon from '@material-ui/icons/Save'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import { getCategories } from '../../actions/category'
import { getPost, registerPost, updatePost } from '../../actions/post'

const Select = React.forwardRef(({ register, categories }, ref) => {
    return <>
      <select name={'category'} ref={ref}>
        {categories.map((category) => <option value={category.name}>{category.name}</option>
        )}
      </select>
    </>
  }
)

function PostForm (props) {

  const { register, handleSubmit } = useForm()

  const onSubmit = async (data) => {
    if (props.action === 'register') {
      await props.actions.registerPost(data)
      props.history.push(`/posts`)
    } else {
      await props.actions.updatePost(props.postId, {
        title: data.title,
        body: data.body,
        category: data.category
      })
      props.history.push(`/posts/${props.postId}`)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid spacing={3} container>
        <Grid item xs={6}>Category</Grid>
        <Grid item xs={6}>
          <Select name='category'
                  defaultValue={props.post ? props.post.category : ''}
                  ref={register}
                  categories={props.categories}
          />
        </Grid>
        <Grid item xs={6}>Title</Grid>
        <Grid item xs={6}>
          <TextField
            defaultValue={props.post ? props.post.title : ''}
            ref={register}
            id="standard-basic"
            name="title"
            margin="normal"
            inputRef={register({ required: true })}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>Body</Grid>
        <Grid item xs={6}>
          <TextField
            defaultValue={props.post ? props.post.body : ''}
            ref={register}
            id="standard-basic"
            name="body"
            margin="normal"
            inputRef={register({ required: true })}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>Author</Grid>
        <Grid item xs={6}>
          <TextField
            defaultValue={props.post ? props.post.author : 'me'}
            ref={register}
            id="standard-basic"
            name="body"
            margin="normal"
            inputRef={register({ required: true })}
            required
            fullWidth
            disabled={props.action === 'update'}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container alignItems="flex-start" justify="flex-end" direction="row">
            <Button type="submit" style={{ marginRight: 5 }} color="primary">
              <EditIcon/> save
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  )
}

// Binds the action creators and maps them to the actions prop
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    Object.assign({}, {
      getCategories,
      getPost,
      updatePost,
      registerPost,
    }),
    dispatch
  )
})

export default connect(null, mapDispatchToProps)(PostForm)
