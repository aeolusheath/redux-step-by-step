import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, SET_LIST } from '../actionTypes'


// reducers 必须是纯函数
const defaultState = {
  inputValue: '',
  list: [
    '6点起床'
  ]
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        inputValue: action.value,
      }
    case ADD_ITEM:
      let list = state.list
      list.push(state.inputValue)
      return {
        ...state,
        list: list
      }
    case DELETE_ITEM:
        let newList = state.list
        newList.splice(action.value, 1)
        return {
          ...state,
          list: newList
        }
    case SET_LIST: 
        return {
          ...state,
          list: action.value
        }
    default:
      return defaultState

  }

  // return state;
}