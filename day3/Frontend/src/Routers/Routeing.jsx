import React from 'react'
import {Route , Routes} from 'react-router-dom'
import { Home } from '../Components/Home'
import { Login } from '../Components/Login'
import { Rest } from '../Components/Rest'
import { Sign } from '../Components/Sign'
import {PrivateRouter}  from './PrivateRouter'
import {useSelector}  from 'react-redux'

export const Routeing = () => {
const {isAuth} = useSelector((state) => state.login)

  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/get-restaurants' element={
          <PrivateRouter isAuth={isAuth}>
        <Rest/>
        </PrivateRouter>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/sign' element={<Sign/>} />
    </Routes>

    </>
  )
}
