import useCart from '@/customhooks/useCart'
import React from 'react'
import Nav from '../components/Nav'

type propstype={
    viewcart:boolean,
    setviewcart:React.Dispatch<React.SetStateAction<boolean>>
}
const Header = ({viewcart,setviewcart}:propstype) => {
   const [totalitems]=useCart()
    const content=(
        <header>
            <div>
                <h1>
                    Amco co
                </h1>
                <div>
                    <p>Total items:totalitems</p>
                    <p>Total price:</p>
                </div>
            </div>
            <Nav viewcart={viewcart} setviewcart={setviewcart}/>
        </header>
    )
  return (
    content
  )
}

export default Header