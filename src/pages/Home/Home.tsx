import { useEffect } from "react";
import { ContentBoard } from "../../components/ContentBoard/ContentBoard";
import { SideBar } from "../../components/SideBar/SideBar";
import s from "./Home.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../store/slices/project/selectors/selectors";
import { updateSelectProject } from "../../store/slices/project/Project.slice";
import { getBoardByProjectId } from "../../store/slices/board/utils";
import {
  setDataBoards,
  updateActiveBoard,
} from "../../store/slices/board/Board.slice";

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const projects = useSelector(getProjects);

  useEffect(() => {
    const id = projects[0].id;
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
  }, []);
  return (
    <div className={s.container}>
      <SideBar />
      <ContentBoard />
    </div>
  );
};
