import { createContext, ReactElement, useEffect, useState } from "react"

export type ProductType={
    sku:string,
    name:string,
    price:number
}
const initstate:ProductType[]=[
    {
        "sku":"item001",
        "name":"widget",
        "price":9.99
    },
    {
        "sku":"item001",
        "name":"widget",
        "price":9.99
    },
    {
        "sku":"item001",
        "name":"widget",
        "price":9.99
    }
]
export type useProductContextType={products:ProductType[]}
const initcontextState:useProductContextType={products:[]}
const productContext=createContext<useProductContextType>(initcontextState)
type childrenType={children?:ReactElement | ReactElement[]}
export const ProductsProvider:React.FC=({children}:childrenType):ReactElement=>{
    const [products,settproducts]=useState<ProductType[]>(initstate)
    /*useEffect(()=>{
        const fetchproucts=async():Promise<ProductType[]>=>{
            try{
                const data=await fetch('http://localhost:3500/products')
                const res=await data.json()
                settproducts(res)
            }
            catch(e){
                console.log(e)
            }
        }
        fetchproucts()
    },[])*/
    return(
        <productContext.Provider value={{products}}>
            {children}
        </productContext.Provider>
    )
}
export default productContext