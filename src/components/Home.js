
import Todos from "./Todos";

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
    <div>
        <Todos todos={dummyTodos} />
    </div>
  )
}

export default Home