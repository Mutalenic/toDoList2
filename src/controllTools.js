import { checkbox, editTask } from './index.js';
import { getTask } from './data.js';

export const deleteTask = () => {
  const clearTask = document.querySelector('.clear-task');
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

export const addTask = () => {
  class Task {
    constructor(description) {
      this.description = description;
      this.index = new Date();
      this.completed = false;
    }
  }
  const addTaskForm = document.querySelector('#add-task');
  const data = JSON.parse(localStorage.getItem('Task-list')) || [];
  addTaskForm.addEventListener('click', () => {
    const inputTaskValue = document.querySelector('#add-task-input').value;
    if (inputTaskValue === '') return;
    const newTask = new Task(inputTaskValue);
    data.push(newTask);
    localStorage.setItem('Task-list', JSON.stringify(data));
  });
  return data;
};

export const deleteOne = (deleteIcon, taskId) => {
  deleteIcon.addEventListener('click', () => {
    const filteredTask = getTask().filter((task) => task.index !== taskId);
    localStorage.setItem('Task-list', JSON.stringify(filteredTask));
    window.location.reload();
  });
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
