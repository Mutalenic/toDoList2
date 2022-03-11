/**
 * @jest-environment jsdom
 */
 import {deleteTask} from './deleteTask.js';
 import {dom} from './dom.js';
 import { addTask } from './addTask.js';
 import {storageData} from './storage.js'


describe('Add tasks', () => {
  test('testing add', () => {
    document.body.innerHTML = dom
    const task = document.querySelectorAll('.task');
    let data = storageData
    const getTask =  data.map((task) => task);
    task[1].classList.add('focus');

    const dataLengthBefore = data.length

    data = deleteTask();
    const clearTask = document.querySelector('.clear-task');
    clearTask.click()

    const dataLengthAfter = data.length


    expect(dataLengthAfter).toBe(dataLengthBefore-1);

  });
});
