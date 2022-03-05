import './style.css';
import { getTask } from './data.js';
import { deleteTask, deleteOne, updateTask } from './controllTools.js';
import { dragDrop } from './dragAndDrop.js';

export const taskList = document.querySelector('.task-list-container');

const getInputValue = (task) => task.description;

getTask().forEach((task) => {
  taskList.innerHTML += `<li class="container task flex-center" draggable="true">
    <span class="left flex-center">
     <input id=${task.index} type="checkbox" ${
  task.completed ? 'checked' : ''
} class="checkbox"/>
     <form class="edit-form" action="/">
       <input 
         data-index-number=${task.index}
         value='${getInputValue(task)}'
         class="${task.completed ? 'edit-task disabled' : 'edit-task'}" ${
  task.completed ? 'disabled' : ''
}
       >
     </form>
    </span>
    <span class="right">
      <i class="fas fa-ellipsis-v"></i>
      <i class="far fa-trash-alt"></i>
    </span>
   </li>`;
});

export const task = document.querySelectorAll('.task');
export const editTask = document.querySelectorAll('.edit-task');
const editForm = document.querySelectorAll('.edit-form');
const reload = document.querySelector('.reload');
export const checkbox = document.querySelectorAll('.checkbox');

editForm.forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    editTask.forEach((taskList) => {
      getTask().forEach((task) => {
        if (taskList.dataset.indexNumber === task.index) {
          task.description = taskList.value;
          localStorage.setItem('Task-list', JSON.stringify(getTask()));
        }
      });
    });
  });
});

window.addEventListener('load', () => {
  updateTask();
  dragDrop();
});

reload.addEventListener('click', () => {
  window.location.reload();
});

task.forEach((item) => {
  item.addEventListener('click', () => {
    task.forEach((t) => t.classList.remove('focus'));
    item.classList.add('focus');
  });
});

deleteTask();

task.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('focus')) {
      const deleteIcon = item.querySelector('.far');
      const taskId = item.querySelector('.checkbox').id;
      deleteOne(deleteIcon, taskId);
    }
  });
});
