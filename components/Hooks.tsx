import React from 'react'

const Hooks = () => {
    //object
type objectt={name:string,id:number}
const userr:objectt={
    name:'smark',
    id:1906
}
const greet=(usr:objectt=userr):void=>{
console.log(`${usr.name}`)
}
greet()
    //expensive calculation
    type fibfunc=(n:number)=>number
    const fib:fibfunc=(n)=>{
        if(n<2)return n
        return fib(n-1)+fib(n-2)
    }
    const mynum:number=37
    const memoresult=React.useMemo<number>(()=>{
       return fib(mynum)
    },[mynum])
    interface user{
        id:number,
        name:string
    }
    const myarr:user[]=[
        {
            id:1906,
            name:'arksm'
        }
    ]
    const [coun,setcoun]=React.useState<objectt>(userr)
    console.log(coun.name,'useStateanswer')
    const [arr,setarr]=React.useState<user[]>(myarr)
    console.log(arr.map((item)=>item.name))
    //const [count,setcount]=React.useState<user | null>({} as user)
    const inputref=React.useRef<HTMLInputElement>(null)
    console.log(inputref?.current?.value)
    const [count,setcount]=React.useState<number>(0)
    React.useEffect(()=>{
        console.log('mount')
        return()=>console.log('unmount')
    },[coun])
const addtwo=React.useCallback(():void=>setcount(prev=>prev+1),[])

  return (
    <div>{count}
    <button onClick={addtwo}>Increment</button>
    <h2>{memoresult}</h2>
    <input ref={inputref} />
    </div>
  )
}

export default Hooks