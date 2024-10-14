import {useState} from 'react';

function A02AdvMultipleInputHandle(){
    let [data , setData] = useState(
        {
            userName : "",
            email : "",
            password : "",
            contactNo : ""
        }
    )

    const onChange = (property) => {
        let value = property.target.value;
        let name= property.target.name;

        setData({
            ...data,
            [name]  : value
        })

    }
    const onSubmit = () =>{
        // e.preventDefault();
        alert(`Hi ${data.userName}, Your form is Submitted. with data 
        email : ${data.email}
        password : ${data.password}
        contactNo : ${data.contactNo}`);

    }
    return (
        <>
            <div className="container">
                <form onSubmit={onSubmit}>
                <h2>Registration Form</h2>
                <div className="input-group">
                    <label htmlFor="userName">Name</label>
                    <input type="text" id="userName" name="userName" value={data.userName || ""} onChange={onChange} required/>
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={data.email || ""} onChange={onChange} required/>
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={data.password || ""} onChange={onChange} required/>
                </div>
                <div className="input-group">
                    <label htmlFor="contactNo">Contact No.</label>
                    <input type="number" id="contactNo" name="contactNo" value={data.contactNo || ""} onChange={onChange}/>
                </div>
                <button type="submit">Submit</button>

                </form>
            </div>
        </>
    )

}
export default A02AdvMultipleInputHandle;