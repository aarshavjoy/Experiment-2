import { createSlice } from "@reduxjs/toolkit";

const initialState = { selectedCardIndex: [], userIntract: false };

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
  },
});

export const { updateSelectedCardIndex, updateUserInteract } =
  BlockChainReducer.actions;
export default BlockChainReducer.reducer;
