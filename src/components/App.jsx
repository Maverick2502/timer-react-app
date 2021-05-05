import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);
  const currTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(currTime);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h2>{time}</h2>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
