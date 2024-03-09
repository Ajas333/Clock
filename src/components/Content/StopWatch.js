import React, { useState } from 'react'
import './Style.css'

function StopWatch() {
   
    const [time,setTime]=useState({s:0,m:0,h:0});
    const [interv,setInterv]=useState();
    const [status,setStatus]=useState(0);
    var updateS =time.s ,updateM=time.m, updateH=time.h;
    
    const run = ()=>{
        if(updateM===60){
            updateH ++;
            updateM = 0;
        }
        if(updateS===60){
            updateM ++;
            updateS = 0;
        }
        updateS ++;
        return setTime({s:updateS,m:updateM, h:updateH})
    }
    const handleStart=()=>{
        run();
        setInterv(setInterval(run,1000));
        setStatus(1);
    }

    const handleStop = ()=>{
        clearInterval(interv);
        setStatus(2);
    }
    const handleReset = ()=>{
        clearInterval(interv);
        setStatus(0)
        setTime({s:0,m:0, h:0})
    }
  return (
    <>
        <div className='clock'>
            <span id='hrs'>{time.h >= 10 ? time.h :"0"+time.h}</span>
            <span>:</span>
            <span id='mins'>{time.m >=  10 ? time.m :"0"+time.m}</span>
            <span>:</span>
            <span id='sec'>{time.s >=  10 ? time.s :"0"+time.s}</span>
        </div>

        <div className='buttons'>
            {status===0   ? <button onClick={handleStart}>Start</button>: "" }
            { status===1  ? <button onClick={handleStop}>Stop</button> :""}
            { status===1  ?<button onClick={handleReset} >Reset</button>: ""}
            { status===2  ? <button onClick={handleStart}>Resume</button> :""}
            { status===2  ?<button onClick={handleReset}>Reset</button>: ""}
            
        </div>
    </>    
    
    
   
  )
}

export default StopWatch
