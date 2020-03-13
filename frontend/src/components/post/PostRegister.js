import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Card from '@material-ui/core/Card'

import PostForm from './PostForm'
import { getCategories } from '../../actions/category'
import LoadingComponent from '../shared/Loading/Loading'
import Title from '../shared/Title'

function PostRegister (props) {

  const { isLoadingCategories, categories } = props

  useEffect(() => {
    if (!props.categories || props.categories.length === 0) {
      props.actions.getCategories()
    }
  }, [])

  return (
    <div>
      <Title
        title={'POST UPDATE'}
        subTitle={'edit your story'}
        iconName={'POSTS'}
        path={'/posts'}
        history={props.history}
      />
      {isLoadingCategories
        ? <LoadingComponent message={'Loading Categories'} size={20}/>
        : <Card style={{ padding: 25 }}>
          <PostForm action={'register'} categories={categories} {...props} />
        </Card>
      }
    </div>
  )
}

// Maps the state of the store to the component props.
const mapStateToProps = (state) => ({
  categories: state.categories.data,
  isLoadingCategories: state.categories.isLoading,
})

// Binds the action creators and maps them to the actions prop
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    Object.assign({}, {
      getCategories
    }),
    dispatch
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(PostRegister)
