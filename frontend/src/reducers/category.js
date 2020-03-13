import { actionTypes } from '../types/category'

const intialState = {
  isLoading: false,
  data: [],
  error: null
}

const category = (state = intialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CATEGORIES:
      return {
        ...state,
        data: action.data
      }

    default:
      return state
  }
}

export default category
