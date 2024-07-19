import React from 'react';
import { useDispatch } from 'react-redux';
import { Todo, toggleTodoStatus } from './redux/slices/todoSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = (id: number) => {
    dispatch(toggleTodoStatus(id));
  };

  return (
    <ul className="list-group mt-4 w-90 m-5">
      {todos.map((todo: Todo) => (
        <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center bg-light p-3">
          <div>
            <h5>{todo.title}</h5>
            <br /> <p>{todo.description}</p>
              <p className='text-dark'>until: {new Date(todo.deadLine).toDateString()}</p>
            
          </div>
          <div>
          <input
              type="checkbox"
              className="form-check-input me-2 p-3 bg-success"
              checked={todo.done}
              onChange={() => handleCheckboxChange(todo.id)}
            />
          <span className={`badge ${
                todo.done ? 
                (new Date(todo.deadLine) >= new Date() ? 'bg-success' : 'bg-secondary') : 
                (new Date(todo.deadLine) < new Date() ? 'bg-danger' : 'bg-secondary')
            }`}>
            {todo.done ? 'Done' : 'Not done'}
        </span>

          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
