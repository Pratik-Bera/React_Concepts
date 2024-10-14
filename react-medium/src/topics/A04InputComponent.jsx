import {useState} from 'react';
const A04InputComponent = () => {
    let [inputVal,onChange]=useState();
    function func(valueonChange){
        onChange(valueonChange.target.value);
    }
    let [fullName,onSubmit] = useState("User");
    function submit(){
        onSubmit(inputVal);
    }
    return (
        <>
            <label htmlFor="name">Name : </label>
            <input type="text" id="name" placeholder="Enter Your Name"  onChange={func} value={inputVal}/>
            <h1>{`${inputVal}`}</h1>
            <h1>{`Hi, ${fullName}`}</h1>
            <button onClick={submit}>click Me</button>
        </>
    )
}
export default A04InputComponent;