import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Components/Home";
import { Login } from "../Components/Login";
import { Summray } from "../Components/Summray";
import { TodoCreate } from "../Components/TodoCreate";
import { Todoedit } from "../Components/Todoedit";
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
      <Route
        path="/todo/:id/edit"
        element={
          <Private isAuth={isAuth}>
           <Todoedit/>
          </Private>
        }
      />
        <Route
        path="/summray"
        element={
          <Private isAuth={isAuth}>
        <Summray/>
          </Private>
        }
      />
    </Routes>
  );
};
