import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { login_err, login_loding, login_success } from '../Redux/Login/action'
import {useNavigate} from 'react-router-dom'

export const Login = () => {
    const [email , setemail] = useState("")
    const [password , setPassword] = useState(" ")
    const dispatch = useDispatch()
    const navigate = useNavigate()

const handleSubmit = () =>{
    const userdata = {
        email,
        password
    }

     dispatch(login_loding())
   fetch(`https://reqres.in/api/login` , {
  method:"POST",
  body:JSON.stringify(userdata),
  headers:{"Content-Type":"application/json"}
 }).then((res) =>{
res.json()
 }).then((res) =>{
dispatch(login_success(res.token))
navigate("/")
 }).catch((err) =>{
     dispatch(login_err())
 })
}

  return (
    <div>
        <input type="text" placeholder='email' value={email}  onChange={(e) =>{
setemail(e.target.value)
        }} />
        <input type="text" placeholder='password' value={password}  onChange={(e) =>{
        setPassword(e.target.value)
      }}/>
   <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
