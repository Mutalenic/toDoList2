import taskActions from './taskActions.js';

const tasksList = document.querySelector('.tasks-list');
const dom = (() => {
  const showTrashIcon = () => {
    const editBtns = document.querySelectorAll('.task-edit-btn');

    editBtns.forEach((editBtn) => {
      editBtn.addEventListener('click', (e) => {
        const tasksElements = document.querySelectorAll('.task-container');
        tasksElements.forEach((taskElm) => {
          taskElm.classList.remove('edit-mode');
        });
        const parent = e.target.parentNode.parentNode.parentNode;
        parent.classList.add('edit-mode');
      });
    });
  };

  const renderTasks = (tasks) => {
    tasksList.innerHTML = '';
    tasks.map((task) => {
      const taskItem = document.createElement('li');
      taskItem.classList.add('task-container', 'd-flex', 'flex-center');
      taskItem.innerHTML = `
              <div class="">
                <input type="checkbox" ${
  task.completed ? 'checked' : ''
  } data-task-id="${task.index}" class="task-checkbox"/>
              </div>
              <div class="${
  task.completed ? 'task-details completed' : 'task-details'
  }">
                <span>${task.description}</span>
                <form class="edit-task-form" data-task-id="${task.index}">
                  <input type="text" value="${
  task.description
  }" class="task-edit" />
                </form>
              </div>
              <div class="task-action-btns">
                <button class="task-edit-btn">
                  <i class="fas fa-ellipsis-v"></i>
                </button>
                <button class="task-delete-btn" data-task-id="${task.index}">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            `;
      showTrashIcon();
      dom.deleteTaskHandler();
      dom.editTastSubmit();
      dom.completeTaskHandler();
      dom.clearCompletedHandler();
      return tasksList.appendChild(taskItem);
    });
  };

  const editTastSubmit = () => {
    const editTaskForms = document.querySelectorAll('.edit-task-form');
    editTaskForms.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskId = form.getAttribute('data-task-id');
        if (form.elements[0].value.trim() === '') return;
        const { tasks } = taskActions.updateTask(
          taskId,
          form.elements[0].value,
        );
        renderTasks(tasks);
      });
    });
  };

  const completeTaskHandler = () => {
    const checkboxes = document.querySelectorAll('.task-checkbox');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', (e) => {
        const taskId = e.target.getAttribute('data-task-id');
        taskActions.completeTask(taskId, e.target.checked);
        window.location.reload();
      });
    });
  };

  const deleteTaskHandler = () => {
    const deleteBtns = document.querySelectorAll('.task-delete-btn');
    deleteBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const taskId = btn.getAttribute('data-task-id');
        const tasks = taskActions.deleteTask(taskId);
        renderTasks(tasks);
      });
    });
  };

  const clearCompletedHandler = () => {
    const clearCompletedBtn = document.querySelector('.clear-completed-btn');
    clearCompletedBtn.addEventListener('click', () => {
      const tasks = taskActions.clearCompleted();
      renderTasks(tasks);
    });
  };

  const updateUI = (tasks) => {
    renderTasks(tasks);
  };

  return {
    renderTasks,
    editTastSubmit,
    showTrashIcon,
    updateUI,
    completeTaskHandler,
    deleteTaskHandler,
    clearCompletedHandler,
  };
})();

export default dom;
