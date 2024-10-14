const Todos= (props) =>{
    return(
        <>
            <div className="todo">
                <button onClick={()=>props.delete(props.id)}><b>/</b></button>
                <p>{props.task}</p>
            </div>
        </>
    )
}
export default Todos;