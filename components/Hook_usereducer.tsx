import React, { ReactNode, useReducer, useState, } from 'react'

type childrenType={
    children:(num:number)=>ReactNode
}
const initstate={
    count:0,
    text:''
}
const enum REDUCER_ACTION_TYPE{
    INCREMENT,
    DECREMENt,
    NEW_INPUT
}
type Reduceraction={
    type:REDUCER_ACTION_TYPE,
    payload?:string 
}
const reducer=(state:typeof initstate,action:Reduceraction):typeof initstate=>{
    switch(action.type){
        case REDUCER_ACTION_TYPE.INCREMENT:
            return {...state,count:state.count+1}
        case REDUCER_ACTION_TYPE.DECREMENt:
            return {...state,count:state.count-1}
        case REDUCER_ACTION_TYPE.NEW_INPUT:
            return {...state,text:action.payload}
        default:
            throw new Error('error')
    }
}
const Hook_usereducer = ({children}:childrenType) => {
    //const [count,setcount]=useState<number>(1)
     //usereducer
   const [state,dispatch]=useReducer(reducer,initstate)
    const increment=()=>dispatch({type:REDUCER_ACTION_TYPE.INCREMENT})
    const decrement=()=>dispatch({type:REDUCER_ACTION_TYPE.DECREMENt})
    const handletxtt=(e:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch({
            type:REDUCER_ACTION_TYPE.NEW_INPUT,
            payload:e.target.value
        })
    }

   
  return (
    <div>
        <h1>{children(state.count)}</h1>
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
        <input onChange={handletxtt}/>
        {state.text}
    </div>
  )
}

export default Hook_usereducer