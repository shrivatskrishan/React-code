import React, { useState } from "react";
import "./circleStyle.css";

const CircleMove = () => {
    const [positionChange, setPositionChange] = useState({ left: '10px', top: '100px' })

    const changeMouseMove = (data) => {
        setPositionChange({ left: `${data?.clientX}px`, top: `${data?.clientY}px` })
        console.log(data?.clientX)
    }

    return <div>
        <div onMouseMove={(e) => changeMouseMove(e)} style={{ width: '100%', height: '100vh'}}>
            <div style={{
               
                backgroundColor: 'red',
                width: '200px',
                zIndex: "1000",
                height: '200px',
                border: '1px solid red',
                borderRadius: "50%",
                position: "fixed",
                top: `${parseInt(positionChange?.top) - 100}px`,
                left: `${parseInt(positionChange?.left) - 100}px`,
            
            }}>
            </div>
        </div>
    </div>
}

export default CircleMove