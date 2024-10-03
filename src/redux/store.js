import { configureStore } from '@reduxjs/toolkit';
import vocabularyReducer from './vocabularySlice'; 

export const store = configureStore({
  reducer: {
    vocabulary: vocabularyReducer, 
  },
});
