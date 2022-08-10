import React from 'react'
import style from './newtodo.module.css'

function NewTodo() {
  return (
    <form className={style.form}>
        <div className={style["form-field"]}>
            <label htmlFor='title'>Title</label>
            <input type="text" id="title" name="title" placeholder="add title" />
        </div>
        <div className={style["form-field"]}>
            <label htmlFor='description'>description</label>
            <textarea type="text" id="desc" name="desc" placeholder="add description" />
        </div>
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo;