
import React, { useEffect, useRef, useState } from "react";

const DragAndDropComp = () => {
    const circleRef = useRef(null);
    const boxRef = useRef(null);
    
    const [isDragging, setIsDragging] = useState(false);
    const [offset, setOffset] = useState({ x: 0, y: 0 });


    useEffect(() => {
        const handleMouseMove = (e) => {
            // Move the cursor circle to follow mouse
            // if (circleRef.current) {
            //     circleRef.current.style.left = `${e.clientX}px`;
            //     circleRef.current.style.top = `${e.clientY}px`;
            // }

            // Move the draggable box if dragging
            if (isDragging && boxRef.current) {
                boxRef.current.style.left = `${e.clientX - offset.x}px`;
                boxRef.current.style.top = `${e.clientY - offset.y}px`;
            }
        };

        const handleMouseUp = () => {
            setIsDragging(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging, offset]);



    const handleMouseDown = (e) => {
        const box = boxRef.current;
        const offsetX = e.clientX - box.offsetLeft;
        const offsetY = e.clientY - box.offsetTop;

        setOffset({ x: offsetX, y: offsetY });
        setIsDragging(true);
    };

    const styles = {
        container: {
            margin: 0,
            height: "100vh",
            overflow: "hidden",
            background: "#f0f0f0",
            cursor: "none",
            position: "relative"
        },
     
        draggableBox: {
            position: "absolute",
            width: "100px",
            height: "100px",
            backgroundColor: "#2ecc71",
            borderRadius: "8px",
            top: "0px",
            left: "0px",
            cursor: isDragging ? "grabbing" : "grab",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
            userSelect: "none"
        }
    };

    return (
       <div style={styles.body}>
      <div ref={circleRef}  />
      <div
        ref={boxRef}
        style={styles.draggableBox}
        onMouseDown={handleMouseDown}
      />
    </div>
    );
};
export default DragAndDropComp