import { ReducerAction, ReducerActionType } from '@/context/CartProvider'
import { ProductType } from '@/context/Productsprovider'
import React, { ReactElement } from 'react'


type propsType={
    product:ProductType,
    dispatch:React.Dispatch<ReducerAction>,
    REDUCER_ACTIONS:ReducerActionType,
    incart:boolean
}
const Product = ({product,dispatch,incart,REDUCER_ACTIONS}:propsType):ReactElement => {
    const onAddcart=()=>dispatch({type:REDUCER_ACTIONS.ADD,payload:{...product,qty:1}})
    const itemcart=incart?'item in cart':null
  return (
    <div>Product</div>
  )
}

export default Product