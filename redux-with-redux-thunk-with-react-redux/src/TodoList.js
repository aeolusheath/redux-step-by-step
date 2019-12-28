import  React  from 'react';
import { useState, useEffect } from 'react'
import {
  Input,
  Button,
  List,
  Divider,
} from 'antd'

import store from './store'
import { changeInputAction, deleteItemAction, addItemAction, getListAction } from './store/actionCreator'
import { connect } from 'react-redux'


const TodoList = (props) => {
  // let [stateObj, setStateObj] = useState({})
  // props.getTodoListFromServer()
  let { getTodoListFromServer } = props
  useEffect(()=>{
    // // 打印 store.getState() 查看代码
    // console.log(store.getState().todo)
    // setStateObj(store.getState().todo)
    
    // // 关键代码，store数据变化，通知state
    // store.subscribe(()=>{
    //   setStateObj(store.getState().todo)
    // })
    console.log(getTodoListFromServer, '')
    getTodoListFromServer()
  }, [getTodoListFromServer])

  // const getTodoListFromServer = () => {
  //   store.dispatch(getListAction())
  // }

  // const changeInput = (e) => {
  //   store.dispatch(changeInputAction(e.target.value))
  // }
  // const completeItem = (index) => {
  //   store.dispatch(deleteItemAction(index))
  // }
  // const addTodoItem = () => {
  //   store.dispatch(addItemAction())
  // }

  return (
    <div style={{padding: 30}}>
        <Input  value={props.stateObj.inputValue} onChange={props.changeInput} style={{width: 250, marginRight: 20}} />
        <Button type="primary" onClick={props.addTodoItem}> 添加 </Button>
        
        <Divider></Divider>

        <List 
          
          bordered 
          dataSource = {props.stateObj.list}
          style={{width: 290}}
          renderItem= {
            (item, index) => {
              return (<List.Item onClick={()=>{props.completeItem(index)}}> {item} </List.Item>)
            }
          }
          >
        </List>

    </div>
  )
}

const stateToProps = (state)=>({
  stateObj: state.todo
})

const dispatchToProps = (dispatch) => ({
  changeInput: (e) => {
    dispatch(changeInputAction(e.target.value))
  },
  addTodoItem: ()=>{
    dispatch(addItemAction())
  },
  completeItem: (index)=> {
    dispatch(deleteItemAction(index))
  },
  getTodoListFromServer: ()=> {
    dispatch(getListAction())
  }
})

export default connect(stateToProps, dispatchToProps)(TodoList)