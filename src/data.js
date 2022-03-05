import { addTask } from './controllTools.js';

const data = addTask();

export const getTask = () => data.map((task) => task);