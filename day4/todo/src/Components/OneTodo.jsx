import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getTodo } from "../Redux/Todo/action.js";

const Wrapper = styled.div`
  margin: 10px;
  padding: 5px;
  border: 1px black solid;
  font-size: 12px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Subtask = styled.div``;

export const OneTodo = (props) => {
  const disptach = useDispatch;
  const { title, description, subtasks, status, tags, date , id} = props;
  const { official, personal, others } = tags;
 
  return (
    <>
      <Wrapper>
        <Header>
          <div>
            <p>{title}</p>
            <p>
              {personal && "Personal"} {official && "Officail"}{" "}
              {others && "Others"}
            </p>
            <p>{description}</p>
          </div>
          <div>{date}</div>
        </Header>
        <Subtask>
          {subtasks.map((el) => (
            <div key={el.id}>
              <label>
                <input
                  type="checkbox"
                  checked={el.subStatus}
                  onChange={(e) => {
                    const subtasksAfterToggle = subtasks.map(
                      (item) => item.id === el.id
                      ? { ...el, subStatus: e.target.checked }
                      : item);
                    const payload = {
                      title,
                      description,
                      subtasks: subtasksAfterToggle,
                      status,
                      tags,
                      date,
                    };
                    axios
                      .put(`http://localhost:3001/Todos/${id}` , payload)
                      .then((res) => {
                        disptach(getTodo());
                      });
                  }}
                />
                {el.subtasktitle}
              </label>
            </div>
          ))}
        </Subtask>
      </Wrapper>
      <hr />
    </>
  );
};
