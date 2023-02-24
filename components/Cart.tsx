import React, { useState } from 'react'

export const Cart = () => {
    const[confirm,setconfirm]=useState<boolean>(false)
    const pagecontent=confirm?
    <h2>Thanks</h2>:
    <>
    <h2>
        <ul>
            {
                ////
            }
        </ul>
    </h2>
    </>
  return (
    <div>Cart</div>
  )
}
