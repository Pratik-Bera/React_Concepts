import {useState} from 'react';
import './A05Form.css';

const A06MultipleFormHundle = () => {
    let [fullName , setFullName] = useState({
        name : "",
        email : ""
    });

    function onChange(changeVal){
        // console.log(changeVal.target.name);
        // console.log(changeVal.target.value);
        const name = changeVal.target.name;
        const value = changeVal.target.value;
        setFullName((state)=>{
            if(name === "name"){
                return {
                    name : value,
                    email : state.email
                }
            }
            else if(name === "email"){
                return {
                    name : state.name,
                    email : value
                }
            }
        });
        console.log(fullName);
    }

    let [details , detailsSetter] = useState();
    function onSubmit(e){
        e.preventDefault();
        detailsSetter(fullName);
        setFullName({
            name : "",
            email : ""
        });
        console.log(details);
    }



    return(
        <>
        <div className= "container">
            <form onSubmit={onSubmit}>
                <h2>Registration Form</h2>
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={fullName.name} onChange={onChange} required/>
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={fullName.email} onChange={onChange} required/>
                </div>
                {/* <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required/>
                </div> */}
                <button type="submit">Submit</button>
            </form>
        </div>

        </>
        )

}
export default A06MultipleFormHundle;