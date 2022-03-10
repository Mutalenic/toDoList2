const deleteTask = (taskList, index) => {
  const newTaskList = [...taskList];
  if (index > -1 && index < newTaskList.length) {
    newTaskList.splice(index, 1);
  }
  return newTaskList;
};

export default deleteTask;