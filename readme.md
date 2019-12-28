# redux / redux-thunk / redux-saga / react-redux 区别是啥

标签（空格分隔）： react

---

## redux

redux  管理react公共数据。 各组件共享数据需要
 &ensp;&ensp;   store ：仓库
 &ensp;&ensp;   reducer ： 纯函数【接受动作指令】
 &ensp;&ensp;   action: 动作指令
 
 
 `store 文件夹下面的index.js文件`
 
```javascript
 import { createStore } from 'redux'
 
 connst store = createStrore()
 export default store
 
```
 
 `reducer文件---reducer必须是纯函数`
```javascript
const defaultState = {
    inputValue: ''
}

export default (state = defaultState, action) {
    switch(action.type) {
        case 'xx_1': 
            return {
                ...state,
                inputValue: action.value
            }
            break
        default:
            return state
    }
}


```
 
 
 

---

## redux-thunk

redux-thunk  一个redux中间件，可以使得aciton为一个异步函数，不然action只能是一个对象

&ensp;&ensp; 现在action可以是一个异步函数，异步函数接受dispatch为参数。

----

## redux-saga

redux-saga 一个redux中间件，接收自己的action【并不会让action变成一个异步函数】，然后执行动作，发送给store的action

---

## react-redux
不是中间件，相当于帮我们简化了一些操作，如果没有react-redux。我们必须手动的`store.getState()` 去获取 然后 `store.subscibe(changeFunc)`



---

总结

1，redux dispatch传入一个action对象

store.dispatch( action ) -> reducer

2，Redux-thunk中间件传入一个函数【返回一个函数】，好处在那里，这个返回的函数可以是异步的，异步函数，异步函数会接收到store传递给它的dispatch对象，等异步流程结束，然后dispatch 去修改store里面的数据。

store.dispatch(()=> {
    return (dispatch) => {
       dispach(action)  -> reducer
    }
})



3，Redux-saga 中间件还是传入一个action对象，只不过这个对象。 我们可以定义到saga里面， dispatch的action对象，我们中间的 saga可以接收，然后接收到处理之后然后再dispatch到store里面。