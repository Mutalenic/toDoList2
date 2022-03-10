/**
 * @jest-environment jsdom
 */

import addTask from './addTask.js';

const task_1 = [
  {
    description: 'hello_1',
    index: 0,
    completed: false,
  },
];

const task_2 = [
  {
    description: 'hello_2',
    index: 1,
    completed: false,
  },
];

document.body.innerHTML = `
<div id="tasks" class="flex-center">
      <div class="task-list flex-center">
        <div class="container flex-center">
          <span class="title">Today's To Do</span>
          <span class="reload"><i class="fas fa-sync-alt"></i></span>
        </div>
        <div class="container flex-center">
          <form id="add-task" class="flex-center">
            <input
              id="add-task-input"
              type="text"
              placeholder="Add to your list"
            />
            <button type="submit" aria-label="Add new task">
              <i class="fa fa-plus-circle"></i>
            </button>
          </form>
        </div>
        <ul class="task-list-container"></ul>
        <button class="container btn clear-task" type="button">
          Clear all completed
        </button>
      </div>
    </div>
`;
describe('Add tasks', () => {
  test('testing add', () => {
    const div = document.querySelector('.task-list-container');
    let li;
    addTask(task_1);
    task_1.forEach((e) => {
      li = document.createElement('li');
      li.innerHTML = e.description;
      div.appendChild(li);
    });
    const word = document.querySelectorAll('.task-list-container');

    expect(word).toHaveLength(1);
  });

  test('testing add', () => {
    const div = document.querySelector('.task-list-container');
    let li;
    addTask(task_2);
    task_2.forEach((e) => {
      li = document.createElement('li');
      li.innerHTML = e.description;
      div.appendChild(li);
    });
    const word = document.querySelectorAll('.task-list-container');

    expect(word).toHaveLength(1);
  });
});
