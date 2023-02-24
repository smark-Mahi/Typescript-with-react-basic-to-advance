import React, { createContext, ReactElement, useCallback } from 'react'
import { ReactNode, useReducer, useState, } from 'react'

type statetype={
    count: number;
    text: string;
}
export const initstate:statetype={
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
const reducer=(state:statetype,action:Reduceraction):statetype=>{
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
//custom hook
const useCounterContext=(initstate:statetype)=>{
    const [state,dispatch]=useReducer(reducer,initstate)
    const increment=useCallback(()=>dispatch({type:REDUCER_ACTION_TYPE.INCREMENT}),[])
    const decrement=()=>dispatch({type:REDUCER_ACTION_TYPE.DECREMENt})
    const handletxtt=(e:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch({
            type:REDUCER_ACTION_TYPE.NEW_INPUT,
            payload:e.target.value
        })
    }
    return {increment,decrement,handletxtt,state}
}
type useCounterContextType=ReturnType<typeof useCounterContext>
const initcontextstate:useCounterContextType={
    state:initstate,
    increment:()=>{},
    decrement:()=>{},
    handletxtt:(e:React.ChangeEvent<HTMLInputElement>)=>{}
}
//context
export const CounterContext=createContext<useCounterContextType>(initcontextstate)
type childrenType={
    children?:ReactElement |ReactElement[] | undefined
}
export const CounterProvider=({children,...initstate}:childrenType & statetype):ReactElement=>{
    return(
        <CounterContext.Provider value={useCounterContext(initstate)}>
{children}
        </CounterContext.Provider>
    )
}