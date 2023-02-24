import React, { useState,useRef } from 'react'

interface props{
    list:string | number;
    setlist:React.Dispatch<React.SetStateAction<string>>;
    handleadd:(e:React.FormEvent)=>void
}

const InputField:React.FC<props>= ({list,setlist,handleadd}) => {
    const inputref = useRef<HTMLInputElement>(null)
    //  const [list, setlist] = useState<string[]>('')
  return (
    <form onSubmit={handleadd}>
        <input type='input' placeholder='Enter a task'
        value={list}
        ref={inputref}
        onChange={(e)=>setlist(e.target.value)}
        />
        <button type='submit'>GO</button>
    </form>
  )
}

export default InputField