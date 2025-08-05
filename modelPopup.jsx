import React, { useRef, useState } from "react";
import "./modelPopup.css";

const ModelPopup = ({ isOpen }) => {
    const [moelOpen,setModelOpen]=useState(isOpen)
    const refData=useRef();


    const closeMOdel=(e)=>{
        // Check if the click is outside the model content
        // if (refData.current && !refData.current.contains(e.target)) {
        //     // If so, close the model
        //     console.log("outside click")
        // } else {
        //     console.log("inside click")
        // }
        // e.stopPropagation();
        // setModelOpen(false)
        if(refData.current && !refData.current.contains(e.target)){
            setModelOpen(false)
        }else{
            console.log("inside click")
        }
                
        }

    return  <div className="model-top-popup" onClick={(e)=>closeMOdel(e)} >
      {moelOpen  &&  <div className="model-top-div" ref={refData}>
            <h1>model is open</h1>
            <div>
                <h2>hi shri can you please tell me</h2>
                <div>
                    <p1>how may i help you</p1>
                </div>
            </div>
        </div>
    }
     </div>
    
}  
export default ModelPopup 