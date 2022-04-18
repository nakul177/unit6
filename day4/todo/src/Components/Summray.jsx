import React, { useReducer, useState } from "react";

import {useDispatch , useSelector} from 'react-redux'

import styled from "styled-components";
import { SideBar } from "./SideBar";


const Contanier = styled.div`
  margin: 100px;
  margin-top: 20px;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  height: 90vh;
  gap: 20px;
`;
const Box1 = styled.div`
  grid-column: 1/5;

  border: 2px black solid;
`;
const Box2 = styled.div`

  grid-column: 5/12;
  border: 2px black solid;
  padding: 20px;
`;
 const Card = styled.div`
     border: 1px black solid;
     padding: 25px;
     width: 200px;
     display: flex;
     align-items: center;
     justify-content: space-between;
 `


export const Summray = () => {

    const { token, username } = useSelector((state) => state.login);
    const { todos } = useSelector((state) => state.todos);



  return (
    <Contanier>
      <Box1>
     <SideBar token={token} username={username} todos={todos} /> 
      </Box1>
      <Box2>
     <h1>SUMMRAY</h1>
     <Card>
         <div>TODO</div>
         <div>{todos.filter((el) => el.status === "Todo").length}</div>
     </Card>
     <Card>
         <div>INPROGRESS</div>
         <div>{todos.filter((el) => el.status === "InProgress").length} </div>
     </Card>
     <Card>
         <div>DONE</div>
         <div>{todos.filter((el) => el.status === "Done").length}</div>
     </Card>
      </Box2>
    </Contanier>
  );
};
