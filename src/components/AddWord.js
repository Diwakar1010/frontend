import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearSearchResults, fetchWord } from '../redux/vocabularySlice';
import { TextField, Button, Container } from '@mui/material';

const AddWord = () => {
  const [newWord, setNewWord] = useState('');
  const dispatch = useDispatch();

  const handleAddWord = () => {
    if (newWord.trim()) {
      dispatch(fetchWord(newWord.trim()))
      .then(() => {
        // Clear the searched word state after adding
        dispatch(clearSearchResults());
      });
      setNewWord(''); // Clear the input field after adding
    }
  };

  return (
    <Container>
      <TextField
        label="Add New Word"
        value={newWord}
        onChange={(e) => setNewWord(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddWord}
        fullWidth
      >
        Add Word
      </Button>
    </Container>
  );
};

export default AddWord;
