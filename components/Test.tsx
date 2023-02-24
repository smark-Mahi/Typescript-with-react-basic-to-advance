import React,{useState} from 'react'
import Image from 'next/image'
//api data
export type ProductType={
    name:string,
    avatar:string,
    id:string
}

type obj={data:ProductType[]}

const Test=({metafic}:obj)=>{
    const [metaficc,setmetafic]=useState<obj>(metafic)
    console.log(metaficc)
    return(
        <div>
            {
                metaficc.data.map((item)=>
                <div key={item.id}>
                    {item.name}
                    <Image src={item.avatar} alt='' width={60} height={60}/>
                </div>
                )
            }
        </div>
    )
}

export default Test