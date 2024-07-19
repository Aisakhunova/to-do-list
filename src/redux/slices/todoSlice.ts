import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
    id: number;
    title: string;
    description: string;
    done: boolean;
    deadLine: Date;
    createdDate: Date;

}

const todo1 = {
    id: 1,
    title: "Go Shopping",
    description: "tomatoes, cucumbers, beef, oil",
    done: true,
    deadLine: new Date(2024, 6, 16),
    createdDate: new Date(2024, 6, 16),

}

const todo2 = {
    id: 2,
    title: "Finish React Project",
    description: "work on About page and add a theme change functional",
    done: false,
    deadLine: new Date(2024, 6, 16),
    createdDate: new Date(2024, 6, 16),

}

interface TodoState{
    todos: Todo[];

}


const initialState: TodoState = {
    todos: [todo1, todo2],
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            console.log("new task is pushed", action.payload);
     
            state.todos.push(action.payload);
        },

        updateTodo: (state, action: PayloadAction <Todo>) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id);
            if (index !== 1) {
                state.todos[index] = action.payload;
            }

        },

        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },

        toggleTodoStatus: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.done = !todo.done;
            }
        }
    },
})

export const {addTodo, updateTodo, deleteTodo, toggleTodoStatus} = todoSlice.actions;
export default todoSlice.reducer;
export type {TodoState};
export type {Todo}