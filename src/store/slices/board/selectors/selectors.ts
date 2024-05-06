import { RootState } from "../../..";
import { ColumnI } from "../type";

export const getColumns = (state: RootState) => {
  if (!state.board.activeBoard) return {};
  return state.board.boards[state.board.activeBoard].columns;
};

export const getColumn =
  (columnId: string) =>
  (state: RootState): ColumnI => {
    if (!state.board.activeBoard) return {} as ColumnI;
    return state.board.boards[state.board.activeBoard].columns[columnId];
  };
