import React from "react";
import {useSelector } from "react-redux";
import {Todo} from "../redux/slices/todoSlice"
import TodoList from "../TodoList";


const TaskListPage: React.FC = () => {
    const todos = useSelector((state: any) => state.todo.todos);
    const undoneTodos = todos.filter((todo: Todo) => !todo.done && new Date(todo.deadLine) > new Date() )

    return (
        <div className="container">
            <TodoList todos={undoneTodos}/>
            
        </div>
    );
}

export default TaskListPage;