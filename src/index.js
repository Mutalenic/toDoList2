import './style.css';
import { addTask, getTask } from './util.js';
import { deleteTask, deleteOne, updateTask } from './controllTools.js';

export const taskList = document.querySelector('.tasks-list');

const tasks = getTask();

tasks.forEach((task, i) => {
  taskList.innerHTML += `<li class="container task flex-center" draggable="true">
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
      <i class="fas fa-ellipsis-v"></i>
      <i class="far fa-trash-alt"></i>
    </span>
   </li>`;
});

const checkbox = document.querySelectorAll('.checkbox');
const editForm = document.querySelectorAll('.edit-form');

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

// console.log(editValue);
// editTask.forEach((taskList) => {
//   getTask().forEach((task) => {
//     if (taskList.dataset.indexNumber === task.index) {
//       task.description = taskList.value;

//     }
//   });
// });
// const getInputValue = (task) => task.description;
// const reload = document.querySelector('.reload');
// const editTask = document.querySelectorAll('.checkbox');