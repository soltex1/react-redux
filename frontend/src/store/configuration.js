import { createStore } from 'redux'

import devTools from './devTools'
import reducers from '../reducers'

const store = createStore(
  reducers,
  devTools
)

export default store
