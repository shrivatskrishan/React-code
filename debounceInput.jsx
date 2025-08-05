import React, { useEffect, useState } from "react";
import { useDebounce } from "./debounceHook";


const DebounceInput=()=>{

    const [text,setText]=useState('');
    const debounceText=useDebounce(text,500)

    const changeValue=(e)=>{
        setText(e.target.value)
    }

    useEffect(()=>{
            console.log(debounceText)
    },[debounceText])

  

    return <input type='text' value={text} onChange={(e)=>changeValue(e)} />

}
export default DebounceInput