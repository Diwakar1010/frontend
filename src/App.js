import React from 'react';
import { Container } from '@mui/material';
import Search from './components/Search';
import WordList from './components/WordList';
import AddWord from './components/AddWord';

const App = () => {
  return (
    <Container sx={{height:"100px",marginTop:"50px"}}>
      <AddWord/>
      <Search />
      <WordList />
    </Container>
  );
};

export default App;
