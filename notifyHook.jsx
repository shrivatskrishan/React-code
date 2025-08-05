import React, { useCallback, useState } from "react";

let id=0;


export const useNotify=()=>{
   const [text,seText]=useState([]);

   const showToast=useCallback((msz,delay=5000)=>{
        let newToast={
            toastId:++id,
            textD:msz,
        }
        seText((prev)=>[...prev,newToast])

        setTimeout(()=>{
            const filterData= text.filter((item)=>item.toastId!==id)
            seText(filterData)
        },delay)

   },[])

   const removeToast=useCallback((id)=>{
    seText(prev=>prev.filter(item=>item.toastId!==id))
   },[])

   return {text,showToast,removeToast}

}