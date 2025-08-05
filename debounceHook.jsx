
import React, { useEffect, useState } from "react";

export const useDebounce=(input,delay)=>{
    const [debounceValue,setDebounceValue]=useState(input)
   

    useEffect(()=>{
        let timier;
        if(timier){
            clearTimeout(timier)
        }
        timier =setTimeout(()=>setDebounceValue(input),
            delay)

        return ()=>{
        
            clearTimeout(timier)
        }

    },[input,delay])

    


    return debounceValue
    

}
