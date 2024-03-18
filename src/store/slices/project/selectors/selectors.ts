import { RootState } from "../../..";

export const getProjects = (state: RootState) => state.project.projects;
export const getSelectedProject = (state: RootState) => state.project.selectProject;
