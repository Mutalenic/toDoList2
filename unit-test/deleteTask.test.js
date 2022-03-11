/**
 * @jest-environment jsdom
 */
import { deleteOne } from './deleteOne.js';
import { dom } from './dom.js';
import { storageData } from './storage.js';

describe('Add tasks', () => {
  test('testing add', () => {
    document.body.innerHTML = dom;
    const closeBtn = document.querySelectorAll('.closeBtn');
    const taskId = document.querySelectorAll('.checkbox')[1].id;

    let data = storageData;
    const dataLengthBefore = data.length;

    data = deleteOne(closeBtn[1], taskId);
    const dataLengthAfter = data.length;

    expect(dataLengthAfter).toBe(dataLengthBefore - 1);
  });
});
