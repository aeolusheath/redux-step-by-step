import todo from './todo'
import global from './global'

import { combineReducers } from 'redux'

export default combineReducers({
  todo, 
  global
})