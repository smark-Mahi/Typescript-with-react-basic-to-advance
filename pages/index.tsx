import Head from 'next/head'
import Image from 'next/image'
import React,{useState} from 'react'
import InputField from  '../components/InputField'
import Test from  '../components/Test'
import Hooks from  '../components/Hooks'
import AllBasics from  '../AllBasics'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cart from '../components/Cart'
import ProductList from '../components/ProductList'
import Hook_usereducer from '../components/Hook_usereducer'
import {CounterProvider} from '../components/Hook_useContext'
import {initstate} from  '../components/Hook_useContext'


export default function Home(data:object) {
//
console.log(data,'data')
console.log(data.data.map(item=>item.id))
const [viewcart,setviewcart]=useState<boolean>(false)

const pagecontent=viewcart?<Cart/>:<ProductList/>
const content=(
  <>
  <Header viewcart={viewcart} setviewcart={setviewcart}/>
  {pagecontent}
  <Footer viewcart={viewcart}/>
  </>
)


//
  const [list, setlist] = useState<string>('')
  let name:string;
  let age:number | string;//union,it could any of two
  let hobbies:string[];
  let role:[number,string]//tuple 1num and 1 str as defined
  role=[77,'something']//if you enter 3rd index you will get error as we defined only 2 indeces
  hobbies=['a','b','c']
  type Person={//its good practice to write type name in cap just like person's p alias
    names:string;
    ages?:number;//? means optional age is optional
  }
  type x=Person &{//it coss
    a:boolean
  }
  let Person={
    names:'smark',
    ages:22
  }
  let arrofobj:Person[]//arr of person obj
  const items=hobbies.map((item,i)=>{return <div key={i}><p>{item}</p></div>})
  interface Todo{
    id:number;
    todo:string;
    isDone:boolean;
  }
  const [count,setcount]=useState< number>(9)
  let printnextnum=(num:number)=>{return num+9}
  function printname(namee:string){
    return namee
  }
  const [todos,settodo]=useState<Todo[]>([])
  function click(){
    setcount(count+1)
  }
  let namess:(num:number)=>void //return undefined
  let never:(name:string)=>never//doesnt return anything
  let n:any;
  if(items.length==3){
    n=<p>yes</p>
  }
  const handleadd=(e:React.FormEvent)=>{
    e.preventDefault()
    if(list){
      settodo([...todos,{id:Date.now(),todo:list,isDone:false}])
      setlist('')
    }
  }
  console.log(todos)
const y=<div><h1>yyyy</h1></div>
const f=function(num:number){
  return
}
  return (
    <>
    <CounterProvider count={initstate.count} text={initstate.text}>
    {n}
    <h2>{items}</h2>
    <h1>{count}</h1>
    <h2>{printnextnum(count)}{printname('smark')}</h2>
    <button onClick={click}>increase</button>
    <InputField list={list} setlist={setlist} handleadd={handleadd}/>
    {y}
    <Test metafic={data}/>
    <AllBasics/>
    <Hooks/>
    {content}
    <Hook_usereducer>{(num:number)=><>current count:{num}yes<p>dgfdg</p></>}</Hook_usereducer>
    </CounterProvider>
    </>
  )
}

export async function getServerSideProps(){
  const resp=await fetch('https://63a5d671f8f3f6d4ab011f37.mockapi.io/api/v1/users')
  const data=await resp.json()
  return{
    props:{
      data
    }
  }
}
