import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
  letter: null,
  quoteId: 0,
  length: 0,
  timestamp: 0,
  error: 0,
  positions: [],
  uniqueCharacters: 0,
  highScores: null,
  userScores: [],
  tries: 0
};

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    setQuote: (state, action) => ({
      ...state,
      value: action.payload.value,
      length: action.payload.length,
      quoteId: action.payload.quoteId,
      timestamp: Date.now(),
    }),
    clearQuote: (state, action) => ({ ...state, value: initialState.value }),
    setLetter: (state, action) => ({ ...state, letter: action.payload.value }),
    setErrorAttempts: (state, action) => ({
      ...state,
      error: state.error + action.payload.value,
    }),
    clearErrorAttempts: (state, action) => ({
      ...state,
      error: initialState.error,
      tries: initialState.tries
    }),
    setLetterPositions: (state, action) => ({
      ...state,
      positions: [...state.positions, ...action.payload.value],
    }),
    clearLetterPositions: (state, action) => ({
      ...state,
      positions: initialState.positions,
    }),
    setHighScores: (state, action) => ({
      ...state,
      highScores: action.payload.highScores,
    }),
    setUserScores: (state, action) => ({...state, userScores: [...state.userScores, action.payload.userScore]}),
    setTries: (state, action) => ({...state, tries: state.tries + action.payload.tries}),
    endGame: (state, action) => ({
      ...state,
      timestamp: action.payload.timestamp - state.timestamp,
      uniqueCharacters: Array.from(new Set(state.positions)).length,
    }),
  },
});

// Action creators are generated for each case reducer function
export const {
  setQuote,
  clearQuote,
  setLetter,
  setErrorAttempts,
  clearErrorAttempts,
  setLetterPositions,
  clearLetterPositions,
  endGame,
  setHighScores,
  setUserScores,
  setTries
} = quoteSlice.actions;

export default quoteSlice.reducer;
