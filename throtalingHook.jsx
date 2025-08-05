import React, { useEffect, useRef, useState } from "react";


export const useThrotaling=(input,delay)=>{
    const [throatalValue,setThrotalValue]=useState(input);
      const lastExecuted = useRef(0);

    useEffect(()=>{
     let timeDat= Date.now();
     if(timeDat-lastExecuted.current>=delay){
        setThrotalValue(input)
        lastExecuted.current=timeDat
     }
    },[input,delay])


        return throatalValue
}
