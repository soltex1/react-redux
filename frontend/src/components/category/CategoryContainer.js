import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import getCategories from '../../actions/category'
import CategoriesList from './CategoriesList'
import Title from '../shared/Title'
import Loading from '../shared/Loading'

function CategoryContainer (props) {

  const { actions, categories, isLoading, history } = props

  useEffect(() => {
    if (!categories || categories.length === 0) {
      actions.getCategories()
    }
  }, [])

  return (
    <div>
      <Title
        title={'CATEGORIES'}
        subTitle={'find out more about this story'}
        iconName={'POSTS'}
        path={'/posts'}
        history={history}
      />
      {isLoading
        ? <Loading message={'Loading Categories'} size={20}/>
        : categories && categories.length
          ? <CategoriesList categories={categories}/>
          : 'There is not categories'
      }
    </div>
  )
}

// Maps the state of the store to the component props.
const mapStateToProps = (state) => ({
  categories: state.categories.data,
  isLoading: state.categories.isLoading,
  error: state.categories.error
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer)
