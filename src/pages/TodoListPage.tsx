import React from "react";
import {Header} from "../components/Header/Header";
import {Form} from "../components/Form/Form";
import {TodoList} from "../components/ToDoList/TodoList";
export const TodoListPage = () => {
  return (
      <React.Fragment>

        <Header/>
        <Form/>
          <TodoList/>




      </React.Fragment>
  )
}