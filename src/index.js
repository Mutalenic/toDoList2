import './style.css';
import storage from './storage.js';
import taskActions from './taskActions.js';
import dom from './dom.js';
import task from './Task.js';

const form = document.getElementById('form');
const todoTextInput = document.getElementById('add-book');

const getDefaultTasks = () => {
  const tasks = task.get();
  const storedTasks = storage.get('tasks');
  if (storedTasks) {
    storedTasks.map((t) => task.add(t));
    dom.renderTasks(storedTasks);
  } else {
    storage.set('tasks', tasks);
    dom.renderTasks(tasks);
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const savedTask = taskActions.addTask(todoTextInput.value);
  task.add(savedTask);
  const tasks = task.get();
  dom.renderTasks(tasks);
  todoTextInput.value = '';
});

getDefaultTasks();
dom.updateUI(storage.get('tasks'));
dom.showTrashIcon();
dom.editTastSubmit(task);
dom.completeTaskHandler();
dom.deleteTaskHandler();
dom.clearCompletedHandler();
