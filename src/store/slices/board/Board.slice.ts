import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { BoardI, ColumnI } from "./type";

export interface BoardStateI {
  boards: Record<string, BoardI>;
  activeBoard: string | null;
}

const initialState: BoardStateI = {
  boards: {},
  activeBoard: null,
};

export const boardSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setDataBoards: (state, action: PayloadAction<Record<string, BoardI>>) => {
      state.boards = action.payload;
    },
    updateActiveBoard: (state, action: PayloadAction<{ id: string }>) => {
      state.activeBoard = action.payload.id;
    },
    updateColumns: (state, action: PayloadAction<Record<string, ColumnI>>) => {
      if (!state.activeBoard) return;
      const prevColumns = state.boards[state.activeBoard].columns;
      state.boards[state.activeBoard].columns = {
        ...prevColumns,
        ...action.payload,
      };
    },
  },
});

export const { updateColumns, setDataBoards, updateActiveBoard } =
  boardSlice.actions;
export default boardSlice.reducer;
