import React from 'react'


function Todo(props) {
  const {title,description} = props.todo;
  return (
    <article>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </article>
  )
}

export default Todo