import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, completeTodo } from '../redux/todosSlice';
import { Card, CardContent, Typography, Button } from '@mui/material';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleComplete = () => {
    dispatch(completeTodo(todo.id));
  };

  return (
    <Card
      className="todo-item"
      sx={{
        backgroundColor: '#181622',
        color: '#ffffff',
        border: '1px solid #33323e',
        marginBottom: '10px',
      }}
    >
      <CardContent>
        <Typography variant="h5" sx={{ color: '#ffffff' }}>
          {todo.title}
        </Typography>
        <Typography sx={{ color: '#ffffff', marginBottom: '10px' }}>
          {todo.description}
        </Typography>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            onClick={handleComplete}
            sx={{
              backgroundColor: '#291839',
              color: '#a993d9',
              border: '1px solid #3d2259',
              '&:hover': {
                  backgroundColor: '#3d2259',
                  borderColor: '#291839',
                  color: '#a993d9',
              },
          }}
          >
            {todo.completed ? 'Completed' : 'Complete'}
          </Button>
          <Button
            onClick={handleDelete}
            variant="outlined"  
            sx={{
              backgroundColor: 'transparent', 
              color: '#a993d9',  
              border: '1px solid #3d2259', 
              '&:hover': {
                backgroundColor: 'transparent',  
                borderColor: '#291839',  
                color: '#a993d9',  
              },
            }}
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TodoItem;
