import { useDispatch, useSelector } from "react-redux";
import {
  getProjects,
  getSelectedProject,
} from "../../store/slices/project/selectors/selectors";
import { updateSelectProject } from "../../store/slices/project/Project.slice";

export const Projects: React.FC = () => {
  const dispatch = useDispatch();
  const projects = useSelector(getProjects);
  const selectProject = useSelector(getSelectedProject);

  const handleClick = (id: string) => {
    dispatch(updateSelectProject({ id }));
  };
  return (
    <div style={{
			display: "flex",
			flexDirection: "column",
		}}>
      {projects.map((project) => (
        <div
          style={{
            padding: "10px",
            cursor: "pointer",
            backgroundColor: selectProject === project.id ? "red" : "lightgray",
            margin: "10px 0",
          }}
          key={project.id}
          onClick={() => handleClick(project.id)}
        >
          {project.title}
        </div>
      ))}
    </div>
  );
};
