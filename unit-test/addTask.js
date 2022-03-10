const addTask = (task) => {
  const taskCopy = task;

  taskCopy.push({
    completed: false,
    index: taskCopy.length + 1,
    description: taskCopy,
  });
};

export default addTask;
