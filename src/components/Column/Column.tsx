import { useSelector } from "react-redux";
import { getColumn } from "../../store/slices/board/selectors/selectors";
import { Droppable } from "react-beautiful-dnd";
import { Task } from "../Task/Task";

interface PropsI {
  columnId: string;
}
export const Column: React.FC<PropsI> = (props) => {
  const { columnId } = props;
  const column = useSelector(getColumn(columnId));

  return (
    <Droppable droppableId={columnId} key={columnId}>
      {(provided) => {
        return (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            <h3>{column.title}</h3>
            {column.tasks.map((task, index) => {
              return <Task task={task} index={index} key={task.id} />;
            })}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};
