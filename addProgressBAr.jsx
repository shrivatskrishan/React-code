import React, { useState } from "react";

export default function ProgressBar() {
  const [progressBar, setProgressBAr] = useState([]);

  const addProgress = () => {
    // add a new bar st Date.now()arting at 0%
    const newBarId = Date.now();
    setProgressBAr((prev) => [...prev, { id: newBarId, width: 0 }]);

    // animate the new bar

    const interval = setInterval(() => {
      setProgressBAr((prev) =>
        prev.map((bar) => {
          if (bar.id === newBarId) {
            if (bar.width >= 200) {
              clearInterval(interval); // stop when full
              return bar;
            }
            bar.width = bar.width + 1;
            return bar;
          }
          return bar;
        }),
      );
    }, 10); // every 20ms → ~2 seconds total for 100%
  };
  return (
    <div>
      <button onClick={() => addProgress()}>Add</button>
      {progressBar.map((item) => {
        return (
          <div className="div-d">
            <div
              style={{
                background: "red",
                height: "5px",
                width: `${item.width}px`,
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
