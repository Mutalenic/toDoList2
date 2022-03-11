// import {storageData} from './storage.js';
// const getTask =  storageData.map((task) => task);
// getTask[1].completed =true
// export const deleteTask = () => {
//   const clearTask = document.querySelector('.clear-task');
//   clearTask.addEventListener('click', () => {
//     if (getTask.length > 0) {
//       const filterCompliteTask = getTask.filter(
//         (task) => task.completed !== true,
//       );
//       localStorage.setItem('Task-list', JSON.stringify(filterCompliteTask));
//       return filterCompliteTask
//     }
//   });
// };

import {storageData} from './storage.js';

export const deleteOne = (deleteIcon, taskId) => {
  let data = storageData
  const getTask = () => data.map((task) => task);

  // Deleted the event listner
  const filteredTask = getTask().filter((task) => task.index !== taskId);
  localStorage.setItem('Task-list', JSON.stringify(filteredTask));
  data = filteredTask

  return data;
};
