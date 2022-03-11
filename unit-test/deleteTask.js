let filterCompliteTask;
export const deleteTask = (data) => {
  const getTask = () => data.map((task) => task);
  // I deleted event listner for test
  if (getTask().length > 0) {
    filterCompliteTask = getTask().filter(
      (task) => task.completed !== true,
    );
    localStorage.setItem('Task-list', JSON.stringify(filterCompliteTask));
  }
  return filterCompliteTask;
};