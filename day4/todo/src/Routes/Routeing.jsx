import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Components/Home";
import { Login } from "../Components/Login";
import { TodoCreate } from "../Components/TodoCreate";
import { Private } from "./PrivateRouter";

export const Routeing = () => {

const {isAuth} = useSelector((state) => state.login)


  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <Private isAuth={isAuth}>
            <Home />
          </Private>
        }
      />

      <Route
        path="/todo-create"
        element={
          <Private isAuth={isAuth}>
            <TodoCreate />
          </Private>
        }
      />
    </Routes>
  );
};
