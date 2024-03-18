import { Board } from "../components/Board/Board";
import { Projects } from "../components/Projects/Projects";

export const Home: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "200px",
      }}
    >
      <Projects />
      <Board />
    </div>
  );
};
