import deleteTask from './addTask.js';


document.body.innerHTML =`
<ul class="task-list-container">
  <li class="container task flex-center" draggable="true">
  <span class="left flex-center">
    <input id="2022-03-07T14:29:34.063Z" type="checkbox" class="checkbox">
    <form class="edit-form" action="/">
      <input data-index-number="2022-03-07T14:29:34.063Z" value="1" class="edit-task">
    </form>
  </span>
  <span class="right">
    <i class="fas fa-ellipsis-v"></i>
    <i class="far fa-trash-alt"></i>
  </span>
  </li>

  <li class="container task flex-center" draggable="true">
  <span class="left flex-center">
    <input id="2022-03-07T14:29:34.063Z" type="checkbox" class="checkbox">
    <form class="edit-form" action="/">
      <input data-index-number="2022-03-07T14:29:34.063Z" value="2" class="edit-task">
    </form>
  </span>
  <span class="right">
    <i class="fas fa-ellipsis-v"></i>
    <i class="far fa-trash-alt"></i>
  </span>
  </li>

  <li class="container task flex-center" draggable="true">
  <span class="left flex-center">
    <input id="2022-03-07T14:29:34.063Z" type="checkbox" class="checkbox">
    <form class="edit-form" action="/">
      <input data-index-number="2022-03-07T14:29:34.063Z" value="3" class="edit-task">
    </form>
  </span>
  <span class="right">
    <i class="fas fa-ellipsis-v"></i>
    <i class="far fa-trash-alt"></i>
  </span>
  </li>
</ul>
`

const div = document.querySelector('.task-list-container');
const taskListArr = Object.entries(div.children)
console.log(taskListArr)

test('Testing Remove', () => {
  deleteTask(taskListArr, 2);
  expect(taskListArr).toHaveLength(2)
})





