import {useState} from 'react';

const A01MultipleInputHandle = () =>{
    let [input , setinput] = useState({
        inputName : "",
        email : "",
        contactNo : "",
    });

    function changeVal(changeObj){
        let value = changeObj.target.value;
        let inputprop = changeObj.target.name;
        if(inputprop==="inputName"){
            setinput({
                inputName : value,
                email : input.email,
                contactNo : input.contactNo
            })
        }else if(inputprop==="email"){
            setinput({
                inputName : input.inputName,
                email : value,
                contactNo : input.contactNo
            })
        }else if(inputprop==="contactNo"){
            setinput({
                inputName : input.inputName,
                email : input.email,
                contactNo : value
            })
        }
        console.log(input);
    }


    const onSubmit = ()=>{
        alert(`Hi ${input.inputName} Your form is Submitted.`);
    }



    return (
        <>
        <div className= "container">
            <form onSubmit={onSubmit} >
                <h2>Registration Form</h2>
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="inputName" placeholder="Enter Your Name" value={input.inputName || ""} onChange={changeVal} required/>
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter Your mail" value={input.email || ""} onChange={changeVal} required/>
                </div>
                <div className="input-group">
                    <label htmlFor="contact">Contact No</label>
                    <input type="number" id="contact" name="contactNo" value={input.contactNo || ""} onChange={changeVal} placeholder="Enter your contact no." required/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>

        </>
    )

    
}
export default A01MultipleInputHandle;