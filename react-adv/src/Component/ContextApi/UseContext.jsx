import {useContext} from 'react';
import { FirstName,LastName } from "../../App";
const UseContext = () =>{
    let fName=useContext(FirstName);
    let lName=useContext(LastName);
    return(
        <>
            <h2>Hey {fName} {lName} from useContext.</h2>
        </>
    )

}
export default UseContext;