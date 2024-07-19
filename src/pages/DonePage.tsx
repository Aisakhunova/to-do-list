import React from "react";
import {useSelector } from "react-redux";
import {Todo} from "../redux/slices/todoSlice"
import TodoList from "../TodoList";

const DonePage: React.FC = () => {
    const todos = useSelector((state: any) => state.todo.todos);
    const doneTodos = todos.filter((todo: Todo) => todo.done)

    return (
        <div className="container">
            <TodoList todos={doneTodos}/>
        </div>
    );
}

export default DonePage;