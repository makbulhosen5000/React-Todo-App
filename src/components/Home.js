import React from 'react'
import Todos from './Todos'
import style from './home.module.css';
import NewTodo from './NewTodo';

const dummyTodos = [
    {

        id:1,
        title:'title one',
        desc:'title description one....'
        },

    {

        id:2,
        title:'title two',
        desc:'title description two....'
        }

    ]
    


function Home() {
  return (
    <div className={style.container}>
      <h1 style={{color:'white'}}>Todo App</h1>
      <NewTodo/>
      <Todos  todos={dummyTodos} />
    </div>
  )
}

export default Home