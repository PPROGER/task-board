export interface ColorI {
  color: string;
  background: string;
}

export interface UserI {
  id: string;
  fullName: string;
  icon: string;
}

export interface TagI {
  name: string;
  color: ColorI;
}

export interface TaskI {
  id: number;
  title: string;
  assignee?: UserI;
  tags: TagI[];
}

export interface ColumnI {
  title: string;
  tasks: TaskI[];
  color: ColorI;
}

export interface BoardI {
	id: string;
	title: string;
	columns: Record<string, ColumnI>;
	projectId: string;
}