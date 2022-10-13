
import Todos from "./Todos";
import style from './home.module.css';
const dummyTodos = [
  {
    id:1,
    title:'This is Title one',
    description:'this is description One',
  },
  {
    id:2,
    title:'This is Title Two',
    description:'this is description Two',
  }
]



function Home() {
  
 
  return (
    <div className={style.container}>
       <h1 style={{ color:'white' }}> Todo App </h1>
        <Todos todos={dummyTodos} />
    </div>
  )
}

export default Home