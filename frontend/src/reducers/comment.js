import { actionTypes } from '../types/comment'

const intialState = {
  isLoading: false,
  data: [],
  error: null
}

const comment = (state = intialState, action) => {
  switch (action.type) {

    case actionTypes.ADD_COMMENT:
      return {
        ...state,
        data: [
          ...state.data,
          action.data
        ]
      }

    case actionTypes.DELETE_COMMENT:
      return {
        ...state,
        data: state.data.filter((post) => post.id !== action.data.commentId)
      }

    case actionTypes.SET_COMMENTS:
      return {
        ...state,
        data: action.data
      }

    case actionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.data
      }

    case actionTypes.UPDATE_COMMENT: {

      const index = state.data.findIndex((comment) => comment.id === action.data.id)

      return {
        ...state,
        data: [
          ...state.data.slice(0, index), // everything before current comment
          {
            ...action.data,
          },
          ...state.data.slice(index + 1), // everything after current comment
        ]
      }
    }

    default:
      return state
  }
}

export default comment
