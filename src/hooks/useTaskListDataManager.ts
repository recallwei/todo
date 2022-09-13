import { useState } from "react";
import type { TaskFormData } from "@interfaces";

const useTaskListDataManager = () => {
  const [tasksData, setTasksData] = useState<TaskFormData[]>([]);

  const removeTask = (
    tasks: TaskFormData[],
    id: string | number
  ): TaskFormData[] => {
    const result = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, deleted: true };
      }
      return task;
    });
    return result;
  };

  const changeChecked = (
    tasks: TaskFormData[],
    id: string | number
  ): TaskFormData[] => {
    const result = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, finished: !task.finished };
      }
      return task;
    });
    setTasksData(result);
    return result;
  };

  const changeContent = (
    tasks: TaskFormData[],
    id: string | number,
    content: string | null
  ): TaskFormData[] => {
    const result = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, content: content };
      }
      return task;
    });
    return result;
  };

  const changeLinkUrl = (
    tasks: TaskFormData[],
    id: string | number,
    linkUrl: string | null
  ): TaskFormData[] => {
    const result = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, linkUrl: linkUrl };
      }
      return task;
    });
    return result;
  };

  return {
    tasksData,
    setTasksData,
    removeTask,
    changeChecked,
    changeContent,
    changeLinkUrl,
  };
};

export default useTaskListDataManager;
