import { createContext, useMemo, useReducer } from "react"

export type cardItemType={
    sku:string,
    name:string,
    price:number,
    qty:number,
}

type CartStateType={cart:cardItemType[]}

const initCartState:CartStateType={
    cart:[]
}
const REDUCER_ACTION_TYPE={
    ADD:'ADD',
    REMOVE:'REMOVE',
    QUANTITY:"QUANTITY",
    SUBMIT:'SUBMIT'
}
export type ReducerActionType=typeof REDUCER_ACTION_TYPE

export type ReducerAction={
    type:string,
    payload?:cardItemType,
}
const reducer=(state:CartStateType,action:ReducerAction):CartStateType=>{
    switch(action.type){
        case REDUCER_ACTION_TYPE.ADD:{
            if(!action.payload){
                throw new Error('action.payload missing in remove action')
            }
            const {sku,name,price}=action.payload
            const filterdCart:cardItemType[]=state.cart.filter(item=>item.sku!==sku)
            const itemExist:cardItemType | undefined=state.cart.find(item=>item.sku===sku)
            const qty:number=itemExist?itemExist.qty+1:1
            return {...state,cart:[...filterdCart,{sku,name,price,qty}]}
        }
        case REDUCER_ACTION_TYPE.REMOVE:{
            if(!action.payload){
                throw new Error('action.payload missing in remove action')
            }
            const {sku}=action.payload
            const filterdCart:cardItemType[]=state.cart.filter(item=>item.sku!==sku)
            return {...state,cart:[...filterdCart]}
        }
        case REDUCER_ACTION_TYPE.QUANTITY:{
            if(!action.payload){
                throw new Error('action.payload missing in remove action')
            }
            const {sku,qty}=action.payload
            const itemExist:cardItemType | undefined=state.cart.find(item=>item.sku===sku)
            if(!itemExist){
                throw new Error('action.payload missing in remove action')
            }
            const updatedItem:cardItemType={...itemExist,qty}
            const filterdCart:cardItemType[]=state.cart.filter(item=>item.sku!==sku)
            return {...state,cart:[...filterdCart,updatedItem]}
        }
        case REDUCER_ACTION_TYPE.SUBMIT:{
            return {...state,cart:[]}
        }
        default:
            throw new Error('undefined reducer action type')
    }
}
const useCartContext=(initCartState:cardItemType)=>{
    const [state,dispatch]=useReducer(reducer,initCartState)

    const REDUCER_ACTION_=useMemo(()=>{
        return REDUCER_ACTION_TYPE
    },[])
    const totalitems=state.cart.reduce((previousvalue,cartitem)=>{
        return previousvalue+cartitem.qty
    },0)

    const cart=state.cart.sort((a,b)=>{
        const itemA=Number(a.sku.slice(-4))
        const itemB=Number(b.sku.slice(-4))
        return itemA-itemB
    })
    return {dispatch,REDUCER_ACTION_,totalitems,cart}
}
export type useCartContextType=ReturnType<typeof useCartContext>

const initCartContextState:useCartContextType={
    dispatch:()=>{},
    REDUCER_ACTION:REDUCER_ACTION_TYPE,
    totalitem:0,
    totalprice:'',
    cart:[]
}
export const CartContext=createContext<useCartContextType>(initCartContextState)

