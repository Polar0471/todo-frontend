import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todosSlice';
import { TextField, Button } from '@mui/material';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (title) {
      dispatch(addTodo({ title, description }));
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
        <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
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
        <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={4}
            style={{ marginTop: '10px' }}
            sx={{
                '& .MuiInputBase-root': {
                    backgroundColor: '#181622',
                    color: '#ffffff',
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

    	<Button
            onClick={handleAddTodo}
            variant="contained"
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
            style={{ marginTop: '10px' }}
        >
        Add ToDo
        </Button>
    </div>
  );
};

export default AddTodo;
