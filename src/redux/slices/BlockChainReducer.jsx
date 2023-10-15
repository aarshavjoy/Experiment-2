import { createSlice } from "@reduxjs/toolkit";

const initialState = { selectedCardIndex: [], userIntract: false, task: 1 };

const BlockChainReducer = createSlice({
  name: "BlockChainDetails",
  initialState,
  reducers: {
    updateSelectedCardIndex: (state, action) => {
      state.selectedCardIndex = action.payload;
    },
    updateUserInteract: (state, action) => {
      state.userIntract = action.payload;
    },
    updateTask: (state, action) => {
      state.task = action.payload;
    },
    clearState: (state, action) => {
      state.selectedCardIndex = [];
      state.task = 1;
      state.userIntract = false;
    },
  },
});

export const {
  updateSelectedCardIndex,
  updateUserInteract,
  updateTask,
  clearState,
} = BlockChainReducer.actions;
export default BlockChainReducer.reducer;
