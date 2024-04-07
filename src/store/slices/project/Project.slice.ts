import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

interface ProjectI {
  id: string;
  title: string;
}

interface ProjectStateI {
  projects: ProjectI[];
  selectProject: string | null;
}

export const getInitialProjectState = (): ProjectStateI => ({
  projects: [
    {
      id: uuidv4(),
      title: "Project 1",
    },
    {
      id: uuidv4(),
      title: "Project 2",
    },
    {
      id: uuidv4(),
      title: "Project 3",
    },
    {
      id: uuidv4(),
      title: "Project 4",
    },
  ],
  selectProject: null,
});

const initialState: ProjectStateI = getInitialProjectState();

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    updateSelectProject: (state, action: PayloadAction<{ id: string }>) => {
      state.selectProject = action.payload.id;
    },
  },
});

export const { updateSelectProject } = projectSlice.actions;
export default projectSlice.reducer;
