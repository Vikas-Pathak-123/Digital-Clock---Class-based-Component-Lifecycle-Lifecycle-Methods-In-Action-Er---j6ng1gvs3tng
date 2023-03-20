import "../styles/App.css";

import React from "react";
import { useState, useEffect } from "react";
const App = () => {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  },[]);
  // console.log(time);

  return (
    <div className="mainDiv">
      <div className="date-time">{time}</div>
    </div>
  );
};
export default App;
