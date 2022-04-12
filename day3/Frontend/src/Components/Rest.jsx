import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import {Navigate} from 'react-router-dom'
import {getdata} from "../Redux/Rest/action"

export const Rest = () => {

   const {token ,  isAuth} = useSelector((state) => state.login)
   
   const {product} = useSelector((state) => state.rest)
 
    const DataProduct = () =>{
        getdata()
    }
   useEffect(() =>{
      DataProduct()
   },[])

   if(!isAuth){
 return <Navigate  to={'/login'}/>
   }

  return (
    <div>Rest</div>
  )
}
