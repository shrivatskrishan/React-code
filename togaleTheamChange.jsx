
import React, { useEffect, useState } from "react";

const Toggeltheme=()=>{
    const [theme,setTheme]=useState(()=>{
        return localStorage.getItem('theme') || 'red'
    })
    useEffect(()=>{
        document.body.classList.toggle('blue-theme' ,theme=='blue')
        localStorage.setItem('theme',theme)
    },[theme])

    const toggleThem=()=>{
        setTheme((prev)=>prev=='red'?'red':"blue")
    }

        return <div onClick={()=>toggleThem()}>
            togel color
        </div>
}

export default Toggeltheme