import React from 'react'
import {Route , Routes} from 'react-router-dom'
import { Login } from '../Components/Login'
import { Rest } from '../Components/Rest'
import { Sign } from '../Components/Sign'

export const Routeing = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Rest/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/sign' element={<Sign/>} />
    </Routes>

    </>
  )
}
