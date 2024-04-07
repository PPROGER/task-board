import { useSelector } from "react-redux";
import { getColumn } from "../../store/slices/board/selectors/selectors";
import { Droppable } from "react-beautiful-dnd";
import { Task } from "../Task/Task";
import s from "./Column.module.scss";
import MoreImage from "../assets/images/content/more_horiz.svg";
import AddTaskImage from "../assets/images/content/add_task.svg";

interface PropsI {
  columnId: string;
}
export const Column: React.FC<PropsI> = (props) => {
  const { columnId } = props;
  const column = useSelector(getColumn(columnId));

  const addTaskHandler = () => {
    alert("Add task");
  };

  return (
    <Droppable droppableId={columnId} key={columnId}>
      {(provided) => {
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={s.board_column}
          >
            <div className={s.board_column_head}>
              <div className={s.colunm_title}>
                <div className={s.column_name}>{column.title}</div>
                <div className={s.column_count_1}>{column.tasks.length}</div>
              </div>
              <div className={s.column_menu}>
                <img src={MoreImage} alt="menu_icon" />
              </div>
            </div>
            <div className={s.board_column_tasks}>
              {column.tasks.map((task, index) => {
                return <Task task={task} index={index} key={task.id} />;
              })}
            </div>
            <div className={s.add_task} onClick={addTaskHandler}>
              <img src={AddTaskImage} alt="add_task" />
            </div>
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};
