import React, { useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
import {useDispatch} from 'react-redux'
import {getTodo}   from "../Redux/Todo/action.js"
import axios from "axios";
const initstate = {
  title: "",
  description: "",
  subtasks: [],
  status: "",
  tags: { official: false, personal: false, others: false },
  date: "",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "UPDATE_TITLE":
      return { ...state, title: payload };
    case "UPDATE_DESCRIPTION":
      return { ...state, description: payload };
    case "UPDATE_STATUS":
      return { ...state, status: payload };
    case "UPDATE_TAGS":
      return { ...state, tags: { ...state.tags, ...payload } };
    case "UPDATE_DATE":
      return { ...state, date: payload };
    case "UPDATE_SUBTASKS":
      return { ...state, subtasks: [...state.subtasks, payload] };
    case "TOGGLE_SUBTASK":
      const subtasksAfterToggle = state.subtasks.map((el) =>
        el.id === payload.id ? { ...el, subStatus: payload.status } : el
      );
      return { ...state , subtasks : subtasksAfterToggle};
    case "DELETE_SUBTASK":
      const subtasksAfterDeletion = state.subtasks.filter(
        (el) => el.id !== payload
      );
      return { ...state ,subtasks : subtasksAfterDeletion };
      case "RESET":
      return {...initstate}
    default:
      throw new Error("plzz check something went worng");
  }
};

export const TodoCreate = () => {
  const [state, dispatch] = useReducer(reducer, initstate);
  const [subtaskInput, setsubtaskInput] = useState("");

  const reduxDisptach = useDispatch()
   const createNewTask = () =>{
     const payload = {
       ...state
     }
     axios.post("http://localhost:3001/Todos" , payload).then(() =>{
       reduxDisptach(getTodo())
     }).then(() => dispatch({type:"RESET"}))
   }

  const { title, description, subtasks, status, tags, date } = state;
  const { official, personal, others } = tags;

  return (
    <div>
      <input
        type=" text"
        placeholder="title"
        value={title}
        onChange={(e) => {
          dispatch({ type: "UPDATE_TITLE", payload: e.target.value });
        }}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => {
          dispatch({ type: "UPDATE_DESCRIPTION", payload: e.target.value });
        }}
      />
      <br />
      <br />
      <label htmlFor="">
        <input
          type="radio"
          checked={status === "Todo"}
          onChange={(e) => {
            dispatch({ type: "UPDATE_STATUS", payload: "Todo" });
          }}
        />
        Todo
      </label>
      <br />
      <br />
      <label htmlFor="">
        <input
          type="radio"
          checked={status === "InProgress"}
          onChange={(e) => {
            dispatch({ type: "UPDATE_STATUS", payload: "InProgress" });
          }}
        />
        InProgress
      </label>
      <br />
      <br />
      <label htmlFor="">
        <input
          type="radio"
          checked={status === "Done"}
          onChange={(e) => {
            dispatch({ type: "UPDATE_STATUS", payload: "Done" });
          }}
        />
        Done
      </label>
      <br />
      <br />
      <label htmlFor="">
        <input
          type="checkbox"
          checked={official}
          onChange={(e) => {
            dispatch({
              type: "UPDATE_TAGS",
              payload: { official: e.target.checked },
            });
          }}
        />
        Official
      </label>
      <label htmlFor="">
        <input
          type="checkbox"
          checked={personal}
          onChange={(e) => {
            dispatch({
              type: "UPDATE_TAGS",
              payload: { personal: e.target.checked },
            });
          }}
        />
        personal
      </label>
      <label htmlFor="">
        <input
          type="checkbox"
          checked={others}
          onChange={(e) => {
            dispatch({
              type: "UPDATE_TAGS",
              payload: { others: e.target.checked },
            });
          }}
        />
        others
      </label>
      <br />
      <br />
      <input
        type="date"
        value={date}
        onChange={(e) => {
          dispatch({ type: "UPDATE_DATE", payload: e.target.value });
        }}
      />
      <br />
      <br />
      <div>
      <h2>CREATE SUBTASKS</h2>
      <input
        type="text"
        value={subtaskInput}
        onChange={(e) => {
          setsubtaskInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          const payload = {
            id: uuid(),
            subtasktitle: subtaskInput,
            subStatus: false,
          };
          dispatch({ type: "UPDATE_SUBTASKS", payload });
          setsubtaskInput("");

        }}
      >
        ADD TASKS
      </button>
      <div>
        {subtasks.map((el) => (
          <div key={el.id} style={{ display: "flex" }}>
            <label htmlFor="">
              <input
                type="checkbox"
                checked={el.subStatus}
                onChange={(e) =>
                  dispatch({
                    type: "TOGGLE_SUBTASK",
                    payload: { id:el.id, status:e.target.checked },
                  })
                }
              />
              {el.subtasktitle}
            </label>
            <button onClick={() => dispatch({type:"DELETE_SUBTASK" , payload:el.id})}>DELETE SUBTASK</button>
          </div>
        ))}
      </div>
      </div>
      <button onClick={()=>createNewTask()}>CREATE TASK</button>
    </div>
  );
};
