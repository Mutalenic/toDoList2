class Task {
  constructor() {
    this.tasks = [];
  }

  get() {
    return this.tasks;
  }

  add(task) {
    this.tasks.push(task);
  }

  update(taskId, task) {
    this.tasks[taskId] = task;
  }

  remove(taskId) {
    this.tasks = this.tasks.filter((task) => task.index.toString() !== taskId);
  }

  clearCompleted() {
    const newTasks = this.tasts.filter((task) => !task.completed);
    this.tasks = newTasks.map((task, index) => {
      task.index = index + 1;
      return task;
    });
  }
}

const task = new Task();

export default task;
