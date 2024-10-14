import {useState} from 'react';

const A03DigitalClock = () => {
    const [currTime , setClock]=useState(new Date().toLocaleTimeString());
    function updater(){
        setClock(new Date().toLocaleTimeString());
    }
    return (
        <>
            <h1>{currTime}</h1>
            <button onClick={updater}>Get Time</button>
        </>
    )
}

export default A03DigitalClock;