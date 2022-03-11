/**
 * @jest-environment jsdom
 */
 import {addTask} from './addTask.js';
 import {dom} from './dom.js';
 import {storageData} from './storage.js';

 



// jest.mock('../src/controllTools.js')

const task1 = [{
    description: 'hello-task',
    index: 0,
    completed: false,
  }];

  document.body.innerHTML = dom

describe('Add tasks', () => {
  test('testing add', () => {
    document.querySelector('#add-task-input').value = task1[0].description

    const addTaskForm = document.querySelector('#add-task');
    let data = storageData
    data = addTask();
    const dataLengthBefore = data.length
    addTaskForm.click()
    const dataLengthAfter = data.length

    expect(dataLengthAfter).toBe(dataLengthBefore+1);
  });
});
