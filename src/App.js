import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { Container, Typography } from '@mui/material';

const App = () => {
  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Typography variant="h3" align="center" gutterBottom>
        ToDo List
      </Typography>
      <AddTodo />
      <TodoList />
    </Container>
  );
};

export default App;
