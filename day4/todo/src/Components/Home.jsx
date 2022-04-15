import React from 'react'
import styled  from 'styled-components'
import {useSelector} from "react-redux"
import { Profile } from './Profile'
import { SideBar } from './SideBar'

const Contanier = styled.div`
  margin: 100px;
  margin-top: 20px;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(11,1fr);
  height: 90vh;
  gap: 20px;
  border: 5px black solid;
`
const Box1 = styled.div`
  grid-column: 1/3;

  border: 2px black solid;
`
const Box2 = styled.div`
  grid-column: 3/6;
  border: 2px black solid;
`
const Box3 = styled.div`
  grid-column: 6/9;
  border: 2px black solid;
`
const Box4 = styled.div`
border: 2px black solid;
  grid-column: 9/12;
`
export const Home = () => {
  const {token ,username} = useSelector((state) => state.login)
  const {todos} = useSelector((state) => state.todos)
  return (
    <Contanier>
      <Box1>
        <SideBar token={token} username={username} todos={todos} />
      </Box1>
      <Box2>TODO</Box2>
      <Box3>In</Box3>
      <Box4>Done</Box4>
    </Contanier>
  )
}
