import  React  from 'react';
import { useState } from 'react'
import {
  Input,
  Button,
  List,
  Divider,
} from 'antd'


const TodoList = (props) => {
  let [stateObj, setStateObj] = useState({
    inputValue: '',
    list: ['6点起床'] 
  })
  
  const changeInput = (e) => {
    setStateObj({
      ...stateObj,
      inputValue: e.target.value
    })
  }
  const completeItem = (index) => {
    let list = stateObj.list;
    list.splice(index, 1)
    setStateObj({
      ...stateObj,
      list: list
    })
  }
  const addTodoItem = () => {
    let list = stateObj.list;
    list.push(stateObj.inputValue)
    console.log(list)
    setStateObj( {
      ...stateObj,
      list: list
    })
  }

  return (
    <div style={{padding: 30}}>
        <Input  value={stateObj.inputValue} onChange={changeInput} style={{width: 250, marginRight: 20}} />
        <Button type="primary" onClick={addTodoItem}> 添加 </Button>
        
        <Divider></Divider>

        <List bordered style={{width: 290}}>
            {
              stateObj.list.map((item, index) => {
                return (<List.Item onClick={()=>{completeItem(index)}}> {item} </List.Item>)
              })
            }
        </List>

    </div>
  )
}

export default TodoList