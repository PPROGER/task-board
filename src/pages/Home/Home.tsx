// import { Board } from "../../components/Board/Board";
// import { Projects } from "../components/Projects/Projects";
import { ContentBoard } from '../../components/ContentBoard/ContentBoard'
import { SideBar } from '../../components/SideBar/SideBar'
import s from "./Home.module.scss";

export const Home: React.FC = () => {
  return (
    <div
      className={s.container}
    >
      <SideBar />
      <ContentBoard />
    </div>
  );
};
