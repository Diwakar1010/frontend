import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography, List, ListItem, ListItemText, Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'; // Import Close icon

// Modal style
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  position: 'relative', // To position the close button
};

const WordList = () => {
  const words = useSelector((state) => state.vocabulary.words);
  const searchedWord = useSelector((state) => state.vocabulary.searchedWord);

  // State to track which word is being clicked
  const [clickedWord, setClickedWord] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (word) => {
    setClickedWord(word);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setClickedWord(null);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Vocabulary List
      </Typography>
      <List>
        {/* Display searched word if available, else display all words */}
        {searchedWord[0] ? (
          <ListItem key={searchedWord[0]._id} button onClick={() => handleOpen(searchedWord[0])}>
            <ListItemText primary={<strong>{searchedWord[0].word}</strong>} />
          </ListItem>
        ) : (
          words?.map((word) => (
            <ListItem key={word._id} button onClick={() => handleOpen(word)}>
              <ListItemText primary={<strong>{word.word}</strong>} />
            </ListItem>
          ))
        )}
      </List>

      {/* Modal to display the word details */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="word-modal-title"
        aria-describedby="word-modal-description"
      >
        <Box sx={modalStyle}>
          {/* Close button */}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>

          {clickedWord && (
            <>
              <Typography id="word-modal-title" variant="h6" component="h2">
                {clickedWord.word}
              </Typography>
              <Typography id="word-modal-description" sx={{ mt: 2 }}>
                Meanings: {clickedWord.meaning} <br />
                Phonetic: {clickedWord.phonetic}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </Container>
  );
};

export default WordList;
