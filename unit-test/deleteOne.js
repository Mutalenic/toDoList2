import { storageData } from './storage.js';

export const deleteOne = (deleteIcon, taskId) => {
  let data = storageData;
  const getTask = () => data.map((task) => task);

  // Deleted the event listner
  const filteredTask = getTask().filter((task) => task.index !== taskId);
  localStorage.setItem('Task-list', JSON.stringify(filteredTask));
  data = filteredTask;

  return data;
};
