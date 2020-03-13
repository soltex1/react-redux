import { actionTypes } from '../types/post'

const intialState = {
  isLoading: false,
  data: [],
  error: null
}

const post = (state = intialState, action) => {

  switch (action.type) {
    case actionTypes.ADD_POST:
      return {
        ...state,
        data: [
          ...state.data,
          action.data
        ].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      }

    case actionTypes.DELETE_POST:
      return {
        ...state,
        data: state.data.filter((post) => post.id !== action.data.postId)
      }

    case actionTypes.SET_LOADING:

      return {
        ...state,
        isLoading: action.data
      }

    case actionTypes.SET_POST:

      let data = state.data.find((post) => post.id === action.data.id)
        ? [...state.data, action.data]
        : [action.data]

      return {
        ...state,
        data: data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      }

    case actionTypes.SET_POSTS:
      return {
        ...state,
        data: action.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      }

    case actionTypes.UPDATE_SCORE: {
      const { voteScore, postId } = action.data
      const index = state.data.findIndex((post) => post.id === postId)

      return {
        ...state,
        data: [
          ...state.data.slice(0, index), // everything before current post
          {
            ...state.data[index],
            voteScore,
          },
          ...state.data.slice(index + 1), // everything after current post
        ]
      }
    }

    case actionTypes.UPDATE_POST: {

      const index = state.data.findIndex((post) => post.id === action.data.id)

      return {
        ...state,
        data: [
          ...state.data.slice(0, index), // everything before current post
          {
            ...action.data,
          },
          ...state.data.slice(index + 1), // everything after current post
        ]
      }
    }

    default:
      return state
  }
}

export default post
