let counter = 0;
function updater(){
    counter++;
    console.log(counter);
}
const A01NotHooks = (props) => {

    console.log(counter);
    return (
        <>
            <div className="card">
            <h1>{counter}</h1>
            <button onClick={updater}>Click Me</button>
            </div>
        </>
    );
};


export default A01NotHooks;