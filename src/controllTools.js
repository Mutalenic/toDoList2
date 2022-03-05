import { getTask } from './util.js';

const checkbox = document.querySelectorAll('.checkbox');
const editTask = document.querySelectorAll('.checkbox');

export const deleteTask = () => {
  const clearTask = document.querySelector('.clear-completed-btn');
  clearTask.addEventListener('click', () => {
    if (getTask().length > 0) {
      const filterCompliteTask = getTask().filter(
        (task) => task.completed !== true,
      );
      localStorage.setItem('Task-list', JSON.stringify(filterCompliteTask));
      window.location.reload();
    }
  });
};

export const deleteOne = (taskId) => {
  const filteredTask = getTask().filter((task, i) => i !== taskId);
  localStorage.setItem('Task-list', JSON.stringify(filteredTask));
  window.location.reload();
};

export const updateTask = () => {
  checkbox.forEach((check) => {
    check.addEventListener('click', () => {
      editTask.forEach((task) => {
        if (check.id === task.dataset.indexNumber) {
          getTask().forEach((item) => {
            if (item.index === check.id) {
              if (item.completed) {
                item.completed = false;
                localStorage.setItem('Task-list', JSON.stringify(getTask()));
                window.location.reload();
              } else {
                item.completed = true;
                localStorage.setItem('Task-list', JSON.stringify(getTask()));
                window.location.reload();
              }
            }
          });
        }
      });
    });
  });
};
