import { addTask } from './updateApp.js';

const data = addTask();

export const getTask = () => data.map((task) => task);