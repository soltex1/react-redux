import { applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const devTools =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware()
    : composeWithDevTools(applyMiddleware());


export default devTools
