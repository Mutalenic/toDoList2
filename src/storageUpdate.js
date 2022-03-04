import storage from './storage.js';

const taskActions = (() => {
  const addTask = (description) => {
    const tasks = storage.get('tasks');
    const task = {
      index: tasks.length + 1,
      completed: false,
      description,
    };
    tasks.push(task);
    storage.set('tasks', tasks);
    return task;
  };

  const updateTask = (index, description) => {
    const tasks = storage.get('tasks');
    const task = tasks[index - 1];
    task.description = description;
    storage.set('tasks', tasks);
    return { task, tasks };
  };

  const completeTask = (index, checked) => {
    const tasks = storage.get('tasks');
    const task = tasks[index - 1];
    task.completed = checked;
    storage.set('tasks', tasks);
    return { task, tasks };
  };

  const deleteTask = (index) => {
    let tasks = storage.get('tasks');
    tasks.splice(index - 1, 1);
    tasks = tasks.map((task, i) => {
      task.index = i + 1;
      return task;
    });
    storage.set('tasks', tasks);
    return tasks;
  };

  const clearCompleted = () => {
    const tasks = storage.get('tasks');
    let unCompletedTasks = tasks.filter((task) => !task.completed);
    unCompletedTasks = unCompletedTasks.map((task, index) => {
      task.index = index + 1;
      return task;
    });
    storage.set('tasks', unCompletedTasks);
    return unCompletedTasks;
  };

  return {
    addTask,
    updateTask,
    completeTask,
    deleteTask,
    clearCompleted,
  };
})();

export default taskActions;
