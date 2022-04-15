import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routeing } from './Routes/Routeing'
import {Link}  from 'react-router-dom'

function App() {


  return (
    <div className="App">
      <div>
<Link to={'/'} >HOME</Link>
<Link to={'/todo-create'} >CREATE_TODO</Link>
<Link to={'/login'} >LOGIN</Link>
      </div>
  <Routeing/>
    </div>
  )
}

export default App
