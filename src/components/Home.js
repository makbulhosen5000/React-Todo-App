import uuid4 from "uuid4";
import React, { useState } from 'react'
import Todos from './Todos'
import style from './home.module.css';
import NewTodo from './NewTodo';



function Home() {
  const [todos,setTodos] = useState([]);
  const sentTodo = (todo) =>{
     setTodos((prevTodo)=>{
      return [...prevTodo,{id:uuid4(),todo}]
     })
     console.log(todos);
  }
  const handlerRemoveTodo=(id)=>{
   
    setTodos(()=>{
      const filteredTodo = todos.filter((todo)=>todo.id !== id);
      return filteredTodo;
    });
  }
  return (
    <div className={style.container}>
      <h1 style={{color:'white'}}>Todo App</h1>
      <NewTodo  onSendTodo={sentTodo} />
      <Todos  todos={todos} onRemoveTodo={handlerRemoveTodo} />
    </div>
  )
}

export default Home