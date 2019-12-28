import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

// 添加这个辅助函数是为了在浏览器里面，扩展redux插件
// step 2
const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancers = composeEnhancers(applyMiddleware(thunk))

const store = createStore(
  reducer,
  // step 1
  // applyMiddleware(thunk)
  enhancers
)

export default store