import React, { useState } from 'react'
import {useDispatch , useSelector} from "react-redux"
import axios from 'axios'
import {login} from '../Redux/Login/action.js'
import {Navigate} from 'react-router-dom'
export const Login = () => {
const [username , setUsername] = useState("")
const [password , setPassword] = useState("")
const {isAuth} = useSelector((state) => state.login)

const dispatch = useDispatch()


const handleLogin = () =>{
    const payload= {
        username,
        password
    }
dispatch(login(payload))

}
if(isAuth){
    return <Navigate to={"/"}/>
}
  return (
    <div>
        <input type="text" placeholder='username' value={username} onChange={(e)=>{
          setUsername(e.target.value)
        }}/>
        <input type="text" placeholder='password' value={password} onChange={(e)=>{
        setPassword(e.target.value)
        }}/>
        <button onClick={() =>{
          handleLogin()
        }} disabled={!username || !password}>LOGIN</button>
    </div>
  )
}
