import React , {useRef} from 'react'

const UseRef = () => {
    const value = useRef(0);
    
    const onClick = () =>{
        value.current = value.current + 1;
        console.log(value);
    }

  return (
    <div>
        <h2>{value.current}</h2>
        <button onClick={onClick}>Click</button>
      
    </div>
  )
}

export default UseRef;
