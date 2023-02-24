import Head from 'next/head'
import Image from 'next/image'
import React,{useState} from 'react'
import InputField from  '../components/InputField'
import Test from  '../components/Test'
export default function Home(data:any) {

 let stringarr=['one','two','dave','gray']
let stringintarr=['start',1,'end']
let mixed=['one',1,true]
let test=[]
let bands:string[]=[]
//array of objects
type arrobj={
    data1:string;
    data2:boolean;
}[]
interface arrobjj{
    data1:string;
    data2:boolean;
    arr:(string | number)[],
    arrobject:arrobj
}
const arr:arrobjj[]=[
    {
    data1:'e',
    data2:true,
    arr:['1','one'],
    arrobject:[{
        data1:'e',
    data2:true
    }]
    }
]
const arrofobj:arrobj=[
    {data1:'e',
    data2:true
}]
console.log(typeof arrofobj,'type',arrofobj.map((item)=>item.data1+'yup'))
//functions
const func1=(list:arrobj=[{data1:'one',data2:false}])=>{//givinf default arguments
    console.log(...list)
}
func1(arrofobj)
const add=(a:number,b:number):number=>{
    return a+b
}
console.log(add(3,6))
const logmsg=(message:string | number):void=>{
    console.log(message)
}
logmsg('sun')
type addd=(a:number,b:number)=>void
const sum:addd=(c,d)=>{
    console.log(c+d)
}
sum(5,5)
//Rest parameter
const total=(...nums:number[]):number=>{
    return nums.reduce((prev,cur)=>prev+cur)
}
console.log(total(1,2,3,4,5))
//generics
function generic<T>(obj:T){
    return {...obj}
    }
console.log(generic({name:'ark',age:21}))
console.log(generic('smark'))//{0: 's', 1: 'm', 2: 'a', 3: 'r', 4: 'k'}
//generics
function specificgeneric<T extends object>(obj:T){
    return {...obj}
    }
console.log(specificgeneric({name:'ark',age:21}))
console.log(specificgeneric({job:'backend developer'}))
//console.log(specificgeneric('smark'))//error:Argument of type 'string' is not assignable to parameter of type 'object'.
//generics
function specificshouldgeneric<T extends {name:string}>(obj:T){//should contai name property
    return {...obj}
    }
console.log(specificshouldgeneric({name:'ark',age:21}))
console.log(specificshouldgeneric({jobtitle:9,name:'backend developer'}))
//generics with interface
interface resources<T>{
    value:T
}
const box1:resources<string>={value:'hello'}
const box2:resources<number>={value:1906}
//Enum
enum Color{
    Red,//0
    Green,//1
    Blue//2
}
//Enum with self giving values
enum Colorwithvalue{
    Red=19,//0
    Green=6,//1
    Blue=1906//2
}
//interface
interface isperson{
    id:Color;
    val:Colorwithvalue;
    name:string;
    age:number;
    speak(a:string):void
    spend(a:number):number
}
//interfaces
interface animal{
    name:string,
    age:number
}
interface canrun{
    run(speed:number):void
}
interface dog extends animal,canrun{
    breed:string,
    bark():void
}
const dogs:dog={
    name:'lee',
    age:18,
    run(speed=56):void{
        console.log(speed)
    },
    breed:'ala',
    bark():void{

    }
}
const inter:isperson={
    id:Color.Blue,//2
    name:'smark',
    val:Colorwithvalue.Blue,
    age:39,
    speak(text='text'):void{
        console.log(text+'6')
    },
    spend(amount=1906):number{
        console.log(amount)
        return amount
    }
}
inter.speak('smark')
  return (
    <>
    </>
  )
}


