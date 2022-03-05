import './style.css';
import { addTask, getTask } from './util.js';
import { deleteOne, updateTask } from './controllTools.js';

export const taskList = document.querySelector('.tasks-list');

const tasks = getTask();

tasks.forEach((task, i) => {
  taskList.innerHTML += `<li class="container task flex-center">
    <span class="left flex-center">
     <input id=${task.index} type="checkbox" ${task.completed ? 'checked' : ''} class="checkbox"/>
     <form class="edit-form" action="/" id="task_${i}">
       <input id="task_${i}_v" name="${i}"
         data-index-number=${task.index}
         value='${task.description}'
         class="${task.completed ? 'edit-task disabled' : 'edit-task'}" $task.completed ? 'disabled' : ''>
     </form>
    </span>
    <span class="right">
      <button value="${i}" class="far fa-trash-alt"></button>
    </span>
   </li>`;
});

const editForm = document.querySelectorAll('.edit-form');
const trash = document.querySelectorAll('.far');
export const task = document.querySelectorAll('.task');

window.addEventListener('load', () => {
  addTask();
  updateTask();

  editForm.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const edit = document.getElementById(`${e.target.id}_v`);
      tasks[parseInt(edit.name, 10)].description = edit.value;
      localStorage.setItem('Task-list', JSON.stringify(tasks));
    });
  });

  trash.forEach((e) => {
    e.addEventListener('click', (e2) => {
      deleteOne(parseInt(e2.target.value, 10));
    });
  });
});