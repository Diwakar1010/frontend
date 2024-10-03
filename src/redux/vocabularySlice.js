import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const vocabularySlice = createSlice({
  name: 'vocabulary',
  initialState: {
    words: [], // List of words
    searchedWord: [], // For displaying the searched word
    loading: false,
  },
  reducers: {
    setWords: (state, action) => {
      state.words.push(action.payload)  ;
    },
    setSearchedWord: (state, action) => {
      state.searchedWord = action.payload;
    },
    clearSearchedWord: (state) => {
      state.searchedWord = []; // Reset the searched word
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setWords, setSearchedWord,clearSearchedWord, setLoading } = vocabularySlice.actions;

// Fetch a single word and store it separately
export const fetchWord = (word) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`http://localhost:5000/api/vocabulary/${word}`);
    dispatch(setWords(response.data)); 
  } catch (error) {
    console.error('Error fetching word:', error);
  } finally {
    dispatch(setLoading(false));
  }
};


export const fetchSearchedWord = (word) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`http://localhost:5000/api/vocabulary/search?searchQuery=${word}`);
    dispatch(setSearchedWord(response.data)); 
  } catch (error) {
    console.error('Error fetching word:', error);
  } finally {
    dispatch(setLoading(false));
  }
};



export const clearSearchResults = () => (dispatch) => {
  dispatch(clearSearchedWord()); // Clear the searched word state
};


export default vocabularySlice.reducer;
