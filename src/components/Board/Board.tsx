import {
  DragDropContext,
  DropResult,
} from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { getColumns } from "../../store/slices/board/selectors/selectors";
import { ColumnI, updateColumns } from "../../store/slices/board/Board.slice";
import { Column } from '../Column/Column'

export const Board: React.FC = () => {
  const dispatch = useDispatch();
  const columns = useSelector(getColumns);
  const onDragEnd = (result: DropResult, columns: Record<string, ColumnI>) => {
    const { destination, source } = result;
    if (!destination) return;

    const sourceColumn = {
      ...columns[source.droppableId],
      tasks: [...columns[source.droppableId].tasks],
    };

    if (source.droppableId === destination.droppableId) {
      const [removed] = sourceColumn.tasks.splice(source.index, 1);
      sourceColumn.tasks.splice(destination.index, 0, removed);
      dispatch(updateColumns({ [source.droppableId]: sourceColumn }));
    } else {
      const destColumn = {
        ...columns[destination.droppableId],
        tasks: [...columns[destination.droppableId].tasks],
      };
      const [removed] = sourceColumn.tasks.splice(source.index, 1);
      destColumn.tasks.splice(destination.index, 0, removed);
      dispatch(
        updateColumns({
          [source.droppableId]: sourceColumn,
          [destination.droppableId]: destColumn,
        })
      );
    }
  };
  return (
    <DragDropContext onDragEnd={(result) => onDragEnd(result, columns)}>
      <div>
        {Object.keys(columns).map((columnId) => {
          return (
            <Column key={columnId} columnId={columnId} />
          );
        })}
      </div>
    </DragDropContext>
  );
};
