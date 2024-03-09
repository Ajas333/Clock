import React,{useState} from 'react'
import './Body.css'
import Time from '../Content/Time'
import StopWatch from '../Content/StopWatch';


function ClockComp() {
    const [selector,setSelector]=useState('clock')
    const handleClick = (option)=>{
      setSelector(option)
    }
  return (

    <div className='container'>
        <div className='selector'>
          <span onClick={()=>handleClick('clock')}>Clock</span>
            <span onClick={()=>handleClick('stopwatch')}>StopWatch</span>
        </div>
        <div className="clock">
          {selector === 'clock' && <Time />}
          {selector === 'stopwatch' && <StopWatch />}
        </div>
    </div>
  )
}

export default ClockComp
