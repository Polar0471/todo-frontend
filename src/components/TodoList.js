import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../redux/todosSlice';
import TodoItem from './TodoItem';
import { TextField } from '@mui/material';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <TextField
        label="Search ToDos"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        fullWidth
        style={{ marginBottom: '20px' }}
        sx={{
            input: {
                backgroundColor: '#181622',
                color: '#ffffff',
                border: '1px solid #33323e',
            },
            '& .MuiInputLabel-root': {
                color: '#ffffff',  // Cor da label
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: '#33323e',
                },
                '&:hover fieldset': {
                    borderColor: '#33323e',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#33323e',
                },
            },
        }}
      />
      <div className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
