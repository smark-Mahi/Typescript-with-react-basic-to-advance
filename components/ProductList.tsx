import React from 'react'
import useProduct from '@/customhooks/useProduct'
import useCart from '@/customhooks/useCart'
import Product from './Product'
import { ReactElement } from 'react'
const ProductList = () => {
  const {dipatch,cart,REDUCER_ACTIONS}=useCart()
  import {products}=useProduct()
  let pagecontent:ReactElement | ReactElement[]=<p>Loading....</p>
  if(products?.length){
    pagecontent=products.map(product=>{
      const incart:boolean=cart.some(item=>item.sku===product.sku)
      return (
        <Product key={product.sku} product={product} dispatch={dipatch} REDUCER_ACTIONS={REDUCER_ACTIONS} incart={incart}/>
      )
    })
  }
  const content=(
    <main>
    {pagecontent}
    </main>
  )
  return content
  }

export default ProductList