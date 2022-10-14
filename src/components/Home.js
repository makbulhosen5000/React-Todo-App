import { v4 as uuidv4 } from 'uuid';
import Todos from "./Todos";
import style from './home.module.css';
import NewTodo from "./NewTodo";

import { useState } from "react";




function Home() {
  const [todos,setTodos] = useState([]);

  const handleAddTodo = (catchTodo) => {
       setTodos((prevTodo)=>{
        return [...prevTodo,{id:uuidv4(),catchTodo}]
       })
  }

  const handleRemoveTodo = (id) =>{
   
    setTodos((prevTodos)=>{
      const filteredTodos = prevTodos.filter((catchTodo)=>catchTodo.id !== id); 
      return filteredTodos;
    });
  }
  
  return (
    <div className={style.container}>
       <h1 style={{ color:'white' }}> Todo App </h1>
        <NewTodo onSentTodos={handleAddTodo} />
        <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  )
}

export default Home