import { MenuBar } from "../MenuBar/MenuBar";
import AddCircleImage from "../../assets/images/sidebar/add_circle.svg";
import { ItemMenu } from "../ItemMenu/ItemMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  getProjects,
  getSelectedProject,
} from "../../../store/slices/project/selectors/selectors";
import TagImage from "../../assets/images/sidebar/tag.svg";
import { updateSelectProject } from "../../../store/slices/project/Project.slice";
import { getBoardByProjectId } from "../../../store/slices/board/utils";
import {
  setDataBoards,
  updateActiveBoard,
} from "../../../store/slices/board/Board.slice";

export const ProjectMenuBar = () => {
  const projects = useSelector(getProjects);
  const selectedProject = useSelector(getSelectedProject);

  const dispatch = useDispatch();

  const selectProjectHandler = (id: string) => {
    dispatch(
      updateSelectProject({
        id,
      })
    );

    const board = getBoardByProjectId(id);
    dispatch(
      setDataBoards({
        [board.id]: board,
      })
    );
    dispatch(
      updateActiveBoard({
        id: board.id,
      })
    );
  };

  const listMenu = projects.map(({ title, id }) => ({
    key: id.toString(),
    image: TagImage,
    name: title,
    onClick: () => selectProjectHandler(id),
  }));
  return (
    <MenuBar
      name={"Projects"}
      listMenu={listMenu}
      activeMenuKey={selectedProject ?? ""}
    >
      <ItemMenu image={AddCircleImage} name="Add new Project" />
    </MenuBar>
  );
};
