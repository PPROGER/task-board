import { RootState } from "../../..";

export const getColumns = (state: RootState) => state.board.columns;

export const getColumn = (columnId: string) => (state: RootState) =>
  state.board.columns[columnId];
