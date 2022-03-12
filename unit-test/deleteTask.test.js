import { deleteTask } from './deleteTask.js';
import { dom } from './dom.js';
import { storageData } from './storage.js';

describe('Add tasks', () => {
  test('Test delete completed tasks function', () => {
    document.body.innerHTML = dom;

    let data = storageData;
    data[0].completed = true;
    data[2].completed = true;

    const dataLengthBefore = data.length;

    data = deleteTask(storageData);
    const dataLengthAfter = data.length;

    expect(dataLengthAfter).toBe(dataLengthBefore - 2);
  });
});