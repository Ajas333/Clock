import React,{useEffect,useState} from 'react'
import './Style.css'

function Time() {
  const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
          setCurrentTime(new Date());
        }, 1000)
    })
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  return (
    <div className='clock'>
        <span id='hrs'>{hours}</span>
        <span>:</span>
        <span id='mins'>{minutes}</span>
        <span>:</span>
        <span id='sec'>{seconds}</span>
    </div>
  )
}

export default Time
