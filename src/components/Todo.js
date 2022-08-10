
import style from './todo.module.css';

import React from 'react'

function todo(props) {

    const {id,title,desc} = props.todo;
  return (
    <article className={style.todo}>
             <h3> {title} </h3>
             <p> {desc} </p>
             <button className={style.btn}><i className='fas fa-trash'></i> </button>     
    </article>
  )
}

export default todo;