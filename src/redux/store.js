import { configureStore } from '@reduxjs/toolkit';
import nameReducer from './reducers/nameReducer';
import quoteReducer from './reducers/quoteReducer';

export const store = configureStore({
  reducer: {
    name: nameReducer,
    quote: quoteReducer
  },
})