import React from "react";
import {TodoListItem} from "./TodoListItem/TodoListItem";
import './TodoList.scss'

export const TodoList = () => {
  return (
      <div className="todo-container">
          <ul className="todo-list failed">
              <TodoListItem/>
          </ul>
          <ul className="todo-list completed">
              <TodoListItem/>
              {/*
              <li className="todo-list-item__wrapper">
                  <span>Вторая задача</span>
                  <div className="todo-list-item__buttons">
                      <button className="btn-trash"></button>
                      <button className="btn-uncheck"></button>
                  </div>
              </li>*/}
          </ul>
      </div>
  )
}