import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routeing } from './Routes/Routeing'
import {Link}  from 'react-router-dom'

function App() {


  return (
    <>
  
      <div  style={{display:"flex" , padding:"10px" , marginLeft:"5px" , marginRight:"5px"}}>
<Link to={'/'}  style={{ marginLeft:"5px" , marginRight:"5px"}}>HOME</Link>
<Link to={'/todo-create'} style={{ marginLeft:"5px" , marginRight:"5px"}} >CREATE_TODO</Link>
<Link to={'/login'} style={{ marginLeft:"5px" , marginRight:"5px"}} >LOGIN</Link>
<Link to={'/summray'} style={{ marginLeft:"5px" , marginRight:"5px"}}>SUMMRAY</Link>
      </div>
  <Routeing/>
  </>
  )
}

export default App
