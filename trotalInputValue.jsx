import React, { useEffect, useState } from "react";
import { useThrotaling } from "./throtalingHook";

const InputThotal=()=>{
    const [inputText,setInputText]=useState('');
    const throtalValue=useThrotaling(inputText,600)

    useEffect(()=>{
            console.log(throtalValue)
    },[throtalValue])


    return <input type="text" onChange={(e)=>setInputText(e.target.value)}/>
}
export default InputThotal