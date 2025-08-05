import React, {  useRef, useState } from "react";

const ToolTip =()=>{
        const refD=useRef()
        const [isShowToolTip,setIsShowToolTip]=useState(false)
        const mouseMpve=()=>{
                    if(refD.current){
                        setIsShowToolTip(true)
                    }
                  
        }  
        
        const mouseLEaf=()=>{
           
                setIsShowToolTip(false)
            
        }
        

    return <div onMouseLeave={mouseLEaf} ref={refD} onMouseEnter={mouseMpve} style={{position:'relative'}}>
        hhhhhhhhhhhhhh
        { isShowToolTip && <div >
            {'asdasdasd hshshr sshhshs'}
        </div>}
    </div>
}
export default ToolTip