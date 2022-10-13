import React from 'react'
import { FaTrashAlt } from "react-icons/fa";
import style from './todo.module.css';

function Todo(props) {
  const {title,description} = props.todo;
  return (
    <article className={style.todo}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <button className={style.btn}>
        <FaTrashAlt/>
      </button>
    </article>
  )
}

export default Todo