import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'

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