import { updateTask, editTask, getTask } from './updateTask.js';
import { dom } from './dom.js';
import { storageData } from './storage.js';

document.body.innerHTML = dom;
let data = storageData;

describe('Add tasks', () => {
  test('Test update  description ', () => {
    editTask[1].value = 'updated-task';

    // This block is for updating the description
    editTask.forEach((taskList) => {
      getTask().forEach((task) => {
        if (taskList.dataset.indexNumber === task.index) {
          task.description = taskList.value;
          localStorage.setItem('Task-list', JSON.stringify(getTask()));
        }
      });
    });

    data = getTask();
    expect(data[1].description).toBe('updated-task');
  });

  test('Test update  complete status function', () => {
    editTask[1].completed = true;
    updateTask();
    expect(data[1].completed).toBe(true);
  });
});