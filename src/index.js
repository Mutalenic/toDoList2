// import './style.css';
import storage from './storage.js';
import taskActions from './taskActions.js';
import app from './app.js';
import task from './update.js';

const form = document.getElementById('form');
const todoTextInput = document.getElementById('add-book');

const getDefaultTasks = () => {
  const tasks = task.get();
  const storedTasks = storage.get('tasks');
  if (storedTasks) {
    storedTasks.map((t) => task.add(t));
    app.renderTasks(storedTasks);
  } else {
    storage.set('tasks', tasks);
    app.renderTasks(tasks);
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const savedTask = taskActions.addTask(todoTextInput.value);
  task.add(savedTask);
  const tasks = task.get();
  app.renderTasks(tasks);
  todoTextInput.value = '';
});

getDefaultTasks();
app.updateUI(storage.get('tasks'));
app.showTrashIcon();
app.editTastSubmit(task);
app.completeTaskHandler();
app.deleteTaskHandler();
app.clearCompletedHandler();
