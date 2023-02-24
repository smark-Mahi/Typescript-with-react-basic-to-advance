import React from 'react'
import useCart from '../customhooks/useCart'

type propstype={
    viewcart:boolean
}
const Footer = ({viewcart}:propstype) => {
    const {totalItems,totalprice}=useCart()
    const year:number=new Date().getFullYear()
    const pagecount=viewcart?
    <p>Shopping cart{year}</p>
    :(<>
    <p>Total items:{totalItems}</p>
    <p>Total items:{totalprice}</p>
    <p>Total items:{totalItems}</p>
    </>
    )
    const content=
        <footer>
            {pagecount}
        </footer>
  return content
}

export default Footer