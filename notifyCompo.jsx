import React from "react";


const toastStyles = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  zIndex: 1000,
};

const singleToastStyle = {
 background: "#333",
  color: "#fff",
  padding: "12px 16px",
  borderRadius: "8px",
  minWidth: "200px",
 boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const closeBtnStyle = {
  marginLeft: "12px",
  cursor: "pointer",
};

const NotifyCompon=({textData,removeToast})=>{
    return (<> {
       <div style={toastStyles}>
        {textData?.map((item)=>  <div key={item.toastId} style={singleToastStyle}>
          {item.textD}
          <span style={closeBtnStyle} onClick={() => removeToast(item.toastId)}>✖</span>
        </div>)
        }
       </div>
    }

    </>)


}
export default NotifyCompon