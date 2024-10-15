import React from "react";
import './TodoListItem.scss';
import { ToDo } from "../../../models/todo-item";
import { toast } from 'react-toastify';

export const TodoListItem = (props: { toDoItem: ToDo, updateTodo: Function, deleteTodo: Function }) => {
    const handleDelete = () => {
        props.deleteTodo(props.toDoItem);
        toast("задача удалена!");
    };

    const handleComplete = () => {
        props.updateTodo(props.toDoItem);
        toast("задача выполнена!");
    };

    return (
        <li className="todo-list-item__wrapper">
            <span>{props.toDoItem.text}</span>
            <div className="todo-list-item__buttons">
                <button className="btn-trash" onClick={handleDelete}></button>
                <button className={props.toDoItem.isDone ? 'btn-check' : 'btn-uncheck'} onClick={handleComplete}></button>
            </div>
        </li>
    );
};


