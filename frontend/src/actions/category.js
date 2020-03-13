import { asyncFetch } from '../utils/api'
import { actionTypes } from '../types/category'

// Load categories
export const getCategories = () => async (dispatch) => {
  try {
    // Send a request to server
    const response = await asyncFetch(
      `http://localhost:3001/categories`, {
        method: 'GET',
        headers: new Headers({
          'Authorization': 'DUMMY_AUTHORIZATION'
        })
      })

    // Dispatch an action to set the categories on the store
    await dispatch({
      type: actionTypes.SET_CATEGORIES,
      data: response.categories
    })
  } catch (err) {
    // TODO dispatch a set_error
    return err.response
  }
}

export default getCategories
