import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import style from './todo.module.css';


function Todo(props) {
  const {title,description} = props.todo;
  const {id} = props;

  
  const btnDeleteHandler = (id) =>{
  props.onRemoveTodo(id)
}

  return (
    <article className={style.todo}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <button className={style.btn} onClick={()=>{btnDeleteHandler(id)}}>
        <FaTrashAlt/>
      </button>
    </article>
  )
}

export default Todo