import React from 'react';

let name = prompt("Enter Your Name");
let currDate = new Date().toLocaleDateString();
let currTime = new Date().toLocaleTimeString();
function A01nameDatePrinter(){    
    return (
        <>
            <h1>{`Hi, ${name}`}</h1>
            <p>{`The Current Date is : ${currDate}.`}</p>
            <p>{`The Current Time is : ${currTime}.`}</p>
        </>
    )
}

export default A01nameDatePrinter;