import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Profile } from "./Profile";
import { SideBar } from "./SideBar";
import { TodoCoutainer } from "./TodoCoutainer";
import { getTodo } from "../Redux/Todo/action";

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
  grid-column: 1/3;

  border: 2px black solid;
`;
const Box2 = styled.div`
  grid-column: 3/6;
  border: 2px black solid;
`;
const Box3 = styled.div`
  grid-column: 6/9;
  border: 2px black solid;
`;
const Box4 = styled.div`
  border: 2px black solid;
  grid-column: 9/12;
`;
export const Home = () => {
  const { token, username } = useSelector((state) => state.login);
  const { todos } = useSelector((state) => state.todos);
  const disptach = useDispatch();
  useEffect(() => {
    disptach(getTodo());
  }, []);

  return (
    <Contanier>
      <Box1>
        <SideBar token={token} username={username} todos={todos} />
      </Box1>
      <Box2>
        <TodoCoutainer
          task={todos.filter((el) => el.status === "Todo")}
          color="#A1E3D8"
          heading="TODO"
        />
      </Box2>
      <Box3>
        <TodoCoutainer
          task={todos.filter((el) => el.status === "InProgress")}
          color="#A069A8"
          heading="INPROGRESS"
        />
      </Box3>
      <Box4>
        <TodoCoutainer
          task={todos.filter((el) => el.status === "Done")}
          color="#005555"
          heading="DONE"
        />
      </Box4>
    </Contanier>
  );
};
