import React, { useState } from 'react'
import style from './newtodo.module.css'

function NewTodo(props) {
  const [todo,setTodo] = useState({title:"",desc:""});
  const {title,desc} = todo;

  const changeHandler = (e) =>{
   const name = e.target.name;
   setTodo((oldTodo)=>{
    return {...oldTodo,[name]:e.target.value}
   })
  }
  const formHandler = (e) =>{
    props.onSendTodo(todo);
   e.preventDefault();
   setTodo({title:"", desc:""})
  }
  return (
    <form className={style.form} onSubmit={formHandler}>
        <div className={style["form-field"]}>
            <label htmlFor='title'>Title</label>
            <input type="text" value={title} id="title" name="title" placeholder="add title" onChange={changeHandler} />
        </div>
        <div className={style["form-field"]}>
            <label htmlFor='description'>description</label>
            <textarea type="text" value={desc} id="desc" name="desc" placeholder="add description" onChange={changeHandler} />
        </div>
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo;