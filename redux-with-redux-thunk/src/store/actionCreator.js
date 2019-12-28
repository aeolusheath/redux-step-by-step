import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, SET_LIST } from './actionTypes'
import axios from 'axios'

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value: value
})

export const deleteItemAction = (index) => ({
  type: DELETE_ITEM,
  value: index
})

export const addItemAction = () => ({
  type: ADD_ITEM
})


export const setListAction = (list)=> ({
  type: SET_LIST,
  value: list
})

// thunk 中间件，使action可以为一个异步函数
// 好处在哪里？
// 如果没有thunk，我们就只能在组件的声明周期里面，调用异步函数，然后调用store.dispatch 
// 1，放在组件里面不利于测试 2，组件代码会特别冗余
export const getListAction = () => {
  // 这里的state不是全局的state， 是全局的state.todo
  return (dispatch, state) => {
    axios.get('https://api.myjson.com/bins/m4454').then(res => {
      let { list } = res.data
      dispatch(setListAction(list))
    }) 
  }
}