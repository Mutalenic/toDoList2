const addTask = () => {
  const addTaskForm = document.querySelector('#form');
  const data = JSON.parse(localStorage.getItem('Task-list')) || [];

  addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputTaskValue = document.querySelector('#add-book').value;
    if (inputTaskValue === '') return;
    let newTask = {};

    if (data.length === 0) {
      newTask = {
        description: inputTaskValue,
        index: 1,
        completed: false,
      };
    } else {
      newTask = {
        description: inputTaskValue,
        index: data.length + 1,
        completed: false,
      };
    }

    data.push(newTask);
    localStorage.setItem('Task-list', JSON.stringify(data));
    window.location.reload();
  });
};

const getTask = () => JSON.parse(localStorage.getItem('Task-list')) || [];

export { addTask, getTask };