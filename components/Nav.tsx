import React from 'react'


type propstype={
    viewcart:boolean,
    setviewcart:React.Dispatch<React.SetStateAction<boolean>>
}
const Nav = ({viewcart,setviewcart}:propstype) => {
    
    const button=viewcart?<button onClick={()=>setviewcart(false)}>vie product</button >:
    <button onClick={()=>setviewcart(true)}>view cart</button>
    const content=(
        <nav>
            {button}
        </nav>
    )
  return content
}

export default Nav