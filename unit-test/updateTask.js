import { dom } from './dom.js';
import { storageData } from './storage.js';

document.body.innerHTML = dom;
const check = document.querySelectorAll('.checkbox')[1];
const data = storageData;
export const editTask = document.querySelectorAll('.edit-task');

export const getTask = () => data.map((task) => task);

export const updateTask = () => {
  // checkbox.forEach((check) => {
  //   check.addEventListener('click', () => {
  editTask.forEach((task) => {
    if (check.id === task.dataset.indexNumber) {
      getTask().forEach((item) => {
        if (item.index === check.id) {
          if (item.completed) {
            item.completed = false;
            localStorage.setItem('Task-list', JSON.stringify(getTask()));
          } else {
            item.completed = true;
            localStorage.setItem('Task-list', JSON.stringify(getTask()));
          }
        }
      });
    }
  });
  //   });
  // });
};