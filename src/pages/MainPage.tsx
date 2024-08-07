import React from "react";
import {useSelector } from "react-redux";
import AddTodo from "../components/AddTodo";
import TodoList from "../TodoList";
import 'bootstrap/dist/css/bootstrap.min.css';


const MainPage: React.FC = () => {
    const todos = useSelector((state: any) => state.todo.todos);

   

    return (
        <div className="container">
            
            <TodoList todos={todos}/>
            <AddTodo/>
            
            
        </div>
    );
}

export default MainPage;