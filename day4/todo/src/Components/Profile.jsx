import React, { useEffect, useState } from 'react'
import axios from 'axios'
import  styled from "styled-components"

const Div = styled.div`
  padding: 25px;
`

export const Profile = ({token , username}) => {
    const [profile , setProfile] = useState({})
console.log(token,username)
useEffect(() =>{
fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
  method:"GET",
  headers:{
    "Content-Type":"application/json",
    Authorization: `Bearer ${token}`
  }
}).then((res) =>res.json())
.then((res)  => {setProfile(res)})
.catch((err) => console.log(err))
},[])




  return (
    <Div>
      <h2>profile Detail</h2>
      <h3>Name :- {profile.username}</h3>
      <p>Email :- {profile.email}</p>
      <p>Description :- {profile.description}</p>
      <p>Mobile No :- {profile.mobile}</p>
    </Div>
  )
}
