/**
 * @jest-environment jsdom
 */

import addTask from './addTask.js';

const task = [
  {
    description: 'hello',
    index: 2,
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

test('testing add', () => {
  const div = document.querySelector('.task-list-container');
  let li;
  addTask(task);
  task.forEach((e) => {
    li = document.createElement('li');
    li.innerHTML = e.description;
    div.appendChild(li);
  });
  const word = document.querySelectorAll('.task-list-container');

  expect(word).toHaveLength(1);
});
