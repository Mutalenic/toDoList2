const addTask = (task) => {
  task.push({
    completed: false,
    index: task.length + 1,
    description: task,
  });
};

export default addTask;
