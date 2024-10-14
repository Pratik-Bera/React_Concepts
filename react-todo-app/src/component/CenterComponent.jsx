import {useState} from 'react';
import Todos from './Todos';
const CenterComponent = () =>{

    let[todo,setTodo] = useState("");
    let[todoList , setTodoList] = useState([]);
    function onChange(event){
        let task=event.target.value;
        setTodo(task);
    }

    function onAdd(){
        let id=1;
        if(todoList.length){
            id=todoList[todoList.length-1].id+1;
        }
        if(todo!==''){

            let obj={
                id : id,
                task : todo
            }
            setTodoList([...todoList,obj]);
            setTodo("");
        }
        // console.log(todoList);
    }

    const onDelete = (id)=>{
        let newTodoList = todoList.filter((item)=>{
            return(item.id !== id);
        });
        setTodoList(newTodoList);
    }
    
    return(
        <div className="center-container">
        <br/>
        <h2>Add To-Do </h2>
            <div className="input-div">
                <input type="text" name="todo" className="input-add-task" value={todo || ""} onChange={onChange}/>
                <button type="button" onClick={onAdd}><b>+</b></button>    
            </div>
            <br/>
            <br/>
            <h2>Your To-Do List</h2>
            <br/>
        {
            todoList.map((item)=>{
                return(
                    <Todos key={item.id} id={item.id} task={item.task} delete={onDelete}/>
                )
            })
        }

        </div>
    )
}
export default CenterComponent;