import React , {useRef,useState} from 'react';

const UseRefInputForm = () => {
    const ipName = useRef( );
    const ipEmail= useRef( );
    const [name , setName] = useState({
        name : "",
        email : ""
    });

    const onSubmit = (e) =>{
        e.preventDefault();
        setName({
            name : ipName.current.value,
            email : ipEmail.current.value
        });
        ipName.current.value = "";
        ipEmail.current.value = "";
        console.log(name);

    };



  return (
    <div>
    <form onSubmit={onSubmit}>
        <label htmlFor="Name">Name</label>
        <input type="text" id="Name" name="Name" ref={ipName} required/>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" ref={ipEmail} required/>
        <button type="submit">Submit</button>
    </form>
    <h2>{`Hey ${process.env.REACT_APP_DEVELOPER} your default username is set to ${name.email}`}</h2>   
      
    </div>
  )
}

export default UseRefInputForm
