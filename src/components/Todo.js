
import style from './todo.module.css';

import React from 'react'
import { dAndD, diceFive } from 'fontawesome';

function todo(props) {

    const {title,desc} = props.todo;
    const {id} = props;
  
    const deleteHandler=(id)=>{
     props.onRemoveTodo(id);
    }
  return (
    <article className={style.todo}>
             <h3> {title} </h3>
             <p> {desc} </p>
             <button className={style.btn} onClick={()=>{deleteHandler(id)}}><i className='fas fa-trash'></i> </button>     
    </article>
  )
}

export default todo;
