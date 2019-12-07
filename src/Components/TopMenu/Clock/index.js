import React, { useState, useEffect } from 'react';
import clock from './clock.png';

const style = {
  display: 'flex',
  alignItems: 'center',
}
const clockStyle = {
  marginRight: '5px',
  width: '14px'
}

const Clock = () => {
  
  const [time, setTime] = useState(new Date())
  
  useEffect(() => {
    setInterval(() => {
      setTime(new Date())
      }, 1000)
  })  
  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();
  
  return (
    <div style={style}>
      <img src={clock} alt='clock' style={clockStyle}/>
      {h}:
      {(m < 10 ? '0' + m : m)}:
      {(s < 10 ? '0' + s : s)} 
    </div>
  )
}

export default Clock;