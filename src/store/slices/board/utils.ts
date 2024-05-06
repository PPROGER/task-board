import { v4 as uuidv4 } from "uuid";
import AvatarImage from "../../../components/assets/images/content/Avatar.png";
import { BoardI, UserI } from "./type";

export const getBoardByProjectId = (projectId: string): BoardI => {
  return {
    id: uuidv4(),
    title: "Board 1",
    projectId,
    columns: getInitBoardData(),
  };
};

const getUser = (): UserI => {
  return {
    id: uuidv4(),
    fullName: "John Doe",
    icon: AvatarImage,
  };
};

export const getInitBoardData = () => {
  return {
    [uuidv4()]: {
      title: "To do",
      color: {
        color: "#ca8a04",
        background: "#e5c975",
      },
      tasks: [
        {
          id: 1,
          title: "Task 1",
          tags: [
            {
              name: "#0001",
              color: {
                color: "#606c80",
                background: "#dce0e7",
              },
            },
          ],
          assignee: getUser(),
        },
        {
          id: 2,
          title: "Task 1",
          tags: [
            {
              name: "Bug",
              color: {
                color: "#ca8a04",
                background: "#e5c975",
              },
            },
          ],
          assignee: getUser(),
        },
        {
          id: 3,
          title: "Task 1",
          tags: [
            {
              name: "Bug",
              color: {
                color: "#ca8a04",
                background: "#e5c975",
              },
            },
          ],
          assignee: getUser(),
        },
      ],
    },
    [uuidv4()]: {
      title: "In progress",
      color: {
        color: "#ca8a04",
        background: "#e5c975",
      },
      tasks: [
        {
          id: 4,
          title: "Task 1",
          tags: [
            {
              name: "Bug",
              color: {
                color: "#606c80",
                background: "#dce0e7",
              },
            },
          ],
          assignee: getUser(),
        },
        {
          id: 5,
          title: "Task 1",
          tags: [
            {
              name: "Bug",
              color: {
                color: "#ca8a04",
                background: "#e5c975",
              },
            },
          ],
          assignee: getUser(),
        },
        {
          id: 6,
          title: "Task 1",
          tags: [
            {
              name: "Bug",
              color: {
                color: "#ca8a04",
                background: "#e5c975",
              },
            },
          ],
          assignee: getUser(),
        },
      ],
    },
    [uuidv4()]: {
      title: "Done",
      color: {
        color: "#ca8a04",
        background: "#e5c975",
      },
      tasks: [
        {
          id: 7,
          title: "Task 1",
          tags: [
            {
              name: "Bug",
              color: {
                color: "#ca8a04",
                background: "#e5c975",
              },
            },
            {
              name: "Bug",
              color: {
                color: "#ca8a04",
                background: "#e5c975",
              },
            },
            {
              name: "Bug",
              color: {
                color: "#ca8a04",
                background: "#e5c975",
              },
            },
          ],
          assignee: getUser(),
        },
        { id: 8, title: "Task 1", tags: [] },
        {
          id: 9,
          title: "Task 1",
          tags: [
            {
              name: "Bug",
              color: {
                color: "#ca8a04",
                background: "#e5c975",
              },
            },
          ],
          assignee: getUser(),
        },
      ],
    },
  };
};
