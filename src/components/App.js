import "../styles/App.css";

import React from 'react'
import { useState, useEffect } from 'react';
const App = () => {
  const[Time,setTime]=useState();

  const today = new Date();

  const todaydate = (today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div id="main">
      <div className="date-time">
      {Time}
      </div>
    </div>
  )
}
export default App;
