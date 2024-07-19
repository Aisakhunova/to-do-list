import React from "react";
import {useSelector } from "react-redux";
import {Todo} from "../redux/slices/todoSlice"
import TodoList from "../TodoList";


const RevokePage: React.FC = () => {
    const todos = useSelector((state: any) => state.todo.todos);
    const revokeTodos = todos.filter((todo: Todo) => !todo.done && new Date(todo.deadLine) < new Date() )

    return (
        <div className="container">
            <TodoList todos={revokeTodos}/>
        </div>
    );
}

export default RevokePage;