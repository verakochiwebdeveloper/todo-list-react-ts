import React from "react";
import {TodoListItem} from "./TodoListItem/TodoListItem";
import './TodoList.scss';
import {ToDo} from "../../models/todo-item";


export const TodoList = (props: { todos: ToDo[], updateTodo: Function, deleteTodo: Function }) => {


    const checkedList = () => {
        return (
            props.todos
                .filter((item) => !item.isDone)
                .map((item, idx) => {
                    return (
                        <TodoListItem toDoItem={item}
                                      key={idx}
                                      updateTodo={props.updateTodo}
                                      deleteTodo={props.deleteTodo}
                        />
                    )
                })
        )
    }
    const unCheckedList = () => {
        return (
            props.todos
                .filter((item) => item.isDone)
                .map((item, idx) => {
                    return (
                        <TodoListItem toDoItem={item}
                                      key={idx}
                                      updateTodo={props.updateTodo}
                                      deleteTodo={props.deleteTodo}
                        />
                    )
                })
        )
    }

    return (
        <div className="todo-container">
            <ul className="todo-list failed">
                {checkedList()}

            </ul>
            <ul className="todo-list completed">
                {unCheckedList()}

            </ul>
        </div>
    );
};
