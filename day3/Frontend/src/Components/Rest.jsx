import React, { useEffect } from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {Navigate } from 'react-router-dom'
import {getdata} from "../Redux/Rest/action"
import './Rest.css'
export const Rest = () => {

  
   
   const {product} = useSelector((state) => state.rest)
   const dispatch = useDispatch()


   const DataProduct = () =>{
    
    dispatch(getdata())
 }

   useEffect(() =>{
    DataProduct()
 },[])


  
    
    
  
  
console.log(product)
  return (
    <>
    {product.map((el) =>{
      return(
        <div className='productdata'>
          <img src={el.image} alt="" />
          <p>{el.price}</p>
          <p>{el.title}</p>
        </div>
      )
    })}
    </>
  )
}
