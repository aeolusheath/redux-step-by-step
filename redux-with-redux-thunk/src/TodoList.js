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

const TodoList = (props) => {
  let [stateObj, setStateObj] = useState({})
  
  useEffect(()=>{
    getTodoListFromServer()
    // 打印 store.getState() 查看代码
    console.log(store.getState().todo)
    setStateObj(store.getState().todo)
    
    // 关键代码，store数据变化，通知state
    store.subscribe(()=>{
      setStateObj(store.getState().todo)
    })
  }, [])

  const getTodoListFromServer = () => {
    store.dispatch(getListAction())
  }

  const changeInput = (e) => {
    store.dispatch(changeInputAction(e.target.value))
  }
  const completeItem = (index) => {
    store.dispatch(deleteItemAction(index))
  }
  const addTodoItem = () => {
    store.dispatch(addItemAction())
  }

  return (
    <div style={{padding: 30}}>
        <Input  value={stateObj.inputValue} onChange={changeInput} style={{width: 250, marginRight: 20}} />
        <Button type="primary" onClick={addTodoItem}> 添加 </Button>
        
        <Divider></Divider>

        <List 
          
          bordered 
          dataSource = {stateObj.list}
          style={{width: 290}}
          renderItem= {
            (item, index) => {
              return (<List.Item onClick={()=>{completeItem(index)}}> {item} </List.Item>)
            }
          }
          >
        </List>

    </div>
  )
}

export default TodoList