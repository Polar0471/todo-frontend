import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  todos: [],
  status: 'idle',
  error: null,
};

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('http://localhost:5000/api/todos/');
  return response.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (newTodo) => {
  const response = await axios.post('http://localhost:5000/api/todos/', newTodo);
  return response.data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  await axios.delete(`http://localhost:5000/api/todos/${id}`);
  return id;
});

export const completeTodo = createAsyncThunk('todos/completeTodo', async (id) => {
  const response = await axios.patch(`http://localhost:5000/api/todos/${id}`);
  return response.data;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter(todo => todo.id !== action.payload);
      })
      .addCase(completeTodo.fulfilled, (state, action) => {
        const todo = state.todos.find(todo => todo.id === action.payload.id);
        if (todo) {
          todo.completed = action.payload.completed;
        }
      });
  },
});

export default todosSlice.reducer;
