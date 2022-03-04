const addTask = () => {
  class Task {
    constructor(description) {
      this.description = description;
      this.index = new Date();
      this.completed = false;
    }
  }

  const addTaskForm = document.querySelector('#form');
  const data = JSON.parse(localStorage.getItem('Task-list')) || [];

  addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputTaskValue = document.querySelector('#add-book').value;
    if (inputTaskValue === '') return;
    const newTask = new Task(inputTaskValue);
    data.push(newTask);
    localStorage.setItem('Task-list', JSON.stringify(data));
    window.location.reload();
  });
};

const getTask = () => JSON.parse(localStorage.getItem('Task-list')) || [];

export { addTask, getTask };
