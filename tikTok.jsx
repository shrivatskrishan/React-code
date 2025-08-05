import React, { useState } from "react";

const TikTokTo = () => {
  const [valueSend, setValueSend] = useState("X");
  const [data, setData] = useState([
    [
      { id: "1", value: "" },
      { id: "2", value: "" },
      { id: "3", value: "" },
    ],
    [
      { id: "1", value: "" },
      { id: "2", value: "" },
      { id: "3", value: "" },
    ],
    [
      { id: "1", value: "" },
      { id: "2", value: "" },
      { id: "3", value: "" },
    ],
  ]);

  const conClickEven = (index, indexVal, divValue) => {
    const datavalue = data;
    if (!datavalue[index][indexVal].value) {
      datavalue[index][indexVal].value = divValue;
      setData([...datavalue]);
      setValueSend((prev) => (prev == "X" ? "0" : "X"));
      if (checkMap(datavalue, divValue)) {
        alert("congo it match");
      }
    }
  };

  function checkMap(data, playVa) {
    const n = data.length;
    // console.log(n);

    for (let i = 0; i < n; i++) {
      let checkmapValu = 0;
      for (let j = 0; j < n; j++) {
        if (data[i][j].value == playVa) {
          ++checkmapValu;
        }
      }
      if (checkmapValu == n) {
        return true;
      }
    }
    for (let i = 0; i < n; i++) {
      let checkmapValu = 0;
      for (let j = 0; j < n; j++) {
        if (data[j][i].value == playVa) {
          ++checkmapValu;
        }
      }
      if (checkmapValu == n) {
        return true;
      }
    }
    let dic = 0;
    for (let i = 0; i < n; i++) {
      console.log(data[i][i]);
      if (data[i][i].value == playVa) {
        ++dic;
      }
    }
    if (dic == n) return true;
    let dic2 = 0;
    for (let i = 0; i < n; i++) {
      if (data[i][n - 1 - i].value == playVa) {
        ++dic2;
      }
    }
    if (dic2 == n) return true;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {data?.map((item, index) => (
        <div style={{ display: "flex" }} key={`item_key_${index}`}>
          {item?.map((itemData, indexVa) => (
            <div
              onClick={() => conClickEven(index, indexVa, valueSend)}
              style={{
                border: "1px solid",
                width: "50px",
                height: "50px",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              key={`iten_data_key_${indexVa}`}
            >
              {itemData.value}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default TikTokTo;
