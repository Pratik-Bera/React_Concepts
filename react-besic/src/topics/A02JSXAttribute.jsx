let name = prompt("Enter Your Name");
let currDate = new Date().toLocaleDateString();
let currTime = new Date().toLocaleTimeString();
function A02JSXAttribute (){
    return (
    <>
    {/* Here we are Using "contenteditable" attributes but we need use Cammel case here*/}
        <h1 contentEditable="true">{`Hi, ${name}`}</h1>
        <p>{`The Current Date is : ${currDate}.`}</p>
        <p>{`The Current Time is : ${currTime}.`}</p>
    </>
    );
}

export default A02JSXAttribute;