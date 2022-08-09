import { Button } from 'react-bootstrap';


import React from 'react'

function todo(props) {

    const {id,title,desc} = props.todo;
  return (
    <article>
             <h1> {id} </h1>
             <h1> {title} </h1>
             <p> {desc} </p>
             <Button className="btn btn-danger">  <i className='fas fa-trash'></i> </Button>     
    </article>
  )
}

export default todo;