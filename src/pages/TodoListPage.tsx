import React, {useState} from "react";
import {Header} from "../components/Header/Header";
import {Form} from "../components/Form/Form";
import {TodoList} from "../components/ToDoList/TodoList";
import {ToDo} from "../models/todo-item";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const TodoListPage = () => {
    const [todos, setTodos] = useState<ToDo[]>([]);

    const createNewTodo = (text:string) => {
      const newTodo: ToDo = {
          id: todos.length,
          text:text,
          isDone:false
        }
        setTodos([...todos, newTodo])
    }

    const updateTodo = (toDoItem: ToDo) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === toDoItem.id) {
                return { ...todo, isDone: !todo.isDone }; // Создаем новый объект
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const deleteTodo = (toDoitem: ToDo) => {
      const newTodos = todos.filter((todo) => todo.id !== toDoitem.id)
        setTodos(newTodos)
    }

  return (
      <React.Fragment>

        <Header/>
        <Form createNewTodo={createNewTodo}  />
          <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
          <ToastContainer />

      </React.Fragment>
  )
}