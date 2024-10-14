import {useState} from 'react';
import './A05Form.css';
// import {useState} from 'react';
const A05Form = () =>{
    let [userName , setName] = useState();
    let [fullName , setFullName] = useState();
    function formSubmit(e){
        e.preventDefault();
        setFullName(userName);
        setName(undefined);
    }
    return(
    <div className= "container">
        <form onSubmit={formSubmit}>
            <h2>Registration Form</h2>
            <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={userName} onChange={(e)=>setName(e.target.value)} required/>
            </div>
            {/* <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required/>
            </div> */}
            <button type="submit">Submit</button>
        </form>
        <h2>hi {fullName} </h2>
    </div>
    )


}
export default A05Form;