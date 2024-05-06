import { Draggable } from "react-beautiful-dnd";
import s from "./Task.module.scss";
import { TaskI } from "../../store/slices/board/type";

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
              {task.tags.map((tag, index) => (
                <div
                  key={index}
                  className={s.task_tag}
                  style={{
                    color: tag.color.color,
                    backgroundColor: tag.color.background,
                  }}
                >
                  {tag.name}
                </div>
              ))}
            </div>
            {task.assignee && (
              <div className={s.assignment_user}>
                <img src={task.assignee?.icon} alt="avatar" />
              </div>
            )}
          </div>
        );
      }}
    </Draggable>
  );
};
