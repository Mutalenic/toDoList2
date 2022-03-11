export const deleteTask = () => {
  const clearTask = document.querySelector('.clear-task');
  clearTask.addEventListener('click', () => {
    if (getTask.length > 0) {
      const filterCompliteTask = getTask().filter(
        (task) => task.completed !== true,
      );
      localStorage.setItem('Task-list', JSON.stringify(filterCompliteTask));
      window.location.reload();
      return filterCompliteTask
    }
  });
};

