import { Draggable } from "react-beautiful-dnd";
import { TaskI } from "../../store/slices/board/Board.slice";
import AvatarImage from "../assets/images/content/Avatar.png";
import s from "./Task.module.scss";

interface PropsI {
  task: TaskI;
  index: number;
}
export const Task: React.FC<PropsI> = (props) => {
  const { task, index } = props;
  return (
    <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
      {(provided) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={s.task}
          >
            <div className={s.header_task}>
              <div className={s.title_task}>{task.title}</div>
            </div>
            <div className={s.tags_task}>
              <div className={s.task_tag_1}>#001</div>
              <div className={s.task_tag_2}>Design</div>
              <div className={s.task_tag_3}>backlog</div>
            </div>
            <div className={s.assignment_user}>
              <img src={AvatarImage} alt="avatar" />
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};
