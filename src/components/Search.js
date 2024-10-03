import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchSearchedWord } from '../redux/vocabularySlice';
import { TextField, Button, Container } from '@mui/material';

const Search = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchSearchedWord(query.trim()));
      setQuery(''); // Clear the input field after searching
    }
  };

  return (
    <Container>
      <TextField
        label="Search Word"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        fullWidth
      >
        Search
      </Button>
    </Container>
  );
};

export default Search;
