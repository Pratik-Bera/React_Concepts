import React,{useReducer} from 'react'

const UseReducer = () => {
    const initial=0;
    const reducer=(state,action)=>{
        switch(action.type){
            case "inc":
                return state+1;
            case "dec":
                return state-1;
            default:
                return state;
        }
        
    }

    const[state , dispatch]=useReducer(reducer,initial);
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>dispatch({type:"inc"})}>Increment</button>
      <button onClick={()=>dispatch({type:"dec"})}>Decrement</button>
    </div>
  )
}

export default UseReducer;
