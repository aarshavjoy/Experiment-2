// candidatesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, name: 'Candidate 1', checks: [true, true, true], verified: true },
    { id: 2, name: 'Candidate 2', checks: [true, true, true], verified: true },
    { id: 3, name: 'Candidate 3', checks: [true, true, true], verified: true },
];

export const candidatesSlice = createSlice({
  name: 'candidates',
  initialState,
  reducers: {
    toggleCheck: (state, action) => {
      const candidate = state.find(c => c.id === action.payload.candidateId);
      candidate.checks[action.payload.checkIndex] = !candidate.checks[action.payload.checkIndex];
      candidate.verified = candidate.checks.every(check => check);
    },
    submitVerification: (state) => {
      
      return state; // Return the current state
    },
  },
});

export const { toggleCheck, submitVerification } = candidatesSlice.actions;
export const selectCandidates = state => state.candidates;
export default candidatesSlice.reducer;
