import {useState} from 'react';
const A01HooksUseState = () =>{
    // let state = useState();
    let [counter,setCounter]=useState(5);
    function updater(){
        setCounter(++counter);
    }


    return (
        <>
            <div className="card">
            <h1>{counter}</h1>
            <button onClick={updater}>Click Me</button>
            </div>
        </>
    )
}

export default A01HooksUseState;