import React, {useState, useEffect} from "react"
import CommentsList from "./tasks/2/Components/CommentsList"
import Stopwatch from "./tasks/1/Stopwatch/Stopwatch"

interface IStopwatchState {
    status: boolean;
    runningTime: number;
    handleClick: () => void
}
let App : React.FC = () =>  {
    const [status, onStatus] = useState(false)
    const [runningTime, onRunningTime] = useState(0)

    const getUnits = (time: number) => { 
        const seconds = time / 1000;

        const min = Math.floor(seconds / 60).toString();
        const sec = Math.floor(seconds % 60).toString();
        const msec = (seconds % 1).toFixed(3).substring(2);

        return `${min}:${sec}:${msec}`;
    }

        let startTime = Date.now() - runningTime;
        let timer = setInterval(() => {
            if (status === true) { 
            onRunningTime(runningTime => runningTime = (Date.now() - startTime));
            } 
        }) 
        if (status === false) {
            clearInterval(timer)
        }
        useEffect (() => {
            clearInterval(timer) 
        })

    //let time = setInterval(()=>alert("tick"), 2000)
    //setTimeout(()=>{clearInterval(time); alert("stop")}, 3000)

    const handleReset = () => {
        clearInterval(timer)
        onRunningTime(0);
        onStatus(false)
    };

    const handleLap = () => {
        console.log(getUnits(runningTime));
    };

    return (
        <div className="App">
             <CommentsList/>
             <h4>Stopwatch functional component</h4>
             <div>
                <p>{getUnits(runningTime)}</p>
                <button onClick={() => onStatus(!status)}>
                    {status ? "Stop" : "Start"}
                </button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleLap}>Lap</button>
            </div>
            <h4>Stopwatch class component</h4>
            <Stopwatch/>
        </div>
    )
}
export default App
/*
useEffect (() => {
    let startTime = Date.now() - runningTime;
    let timer = setInterval(() => {
        if (status === true){
            onRunningTime(runningTime => runningTime = (Date.now() - startTime));
        }else{
            return () => clearInterval(timer)
        }
    })
})
*/
    
   

