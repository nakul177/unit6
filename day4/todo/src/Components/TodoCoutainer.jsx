import React from 'react'
import styled from 'styled-components'
import { OneTodo } from './OneTodo'


const Div = styled.div`

`
const P = styled.p`
 text-align: center;
 background-color: ${props => props.color};
 padding: 20px;
 font-size: 22px;
`

export const TodoCoutainer = ({task , color , heading}) => {
  return (
    <div>
   <P color={color}>{heading}</P>
   {task.map((task) =>{
       return(
        <OneTodo key={task.id} {...task} />   
       )
   })}
    </div>
  )
}
