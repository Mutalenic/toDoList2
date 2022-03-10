import deleteTask from './deleteTask';


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
const taskListArr = Object.keys(div.children)
console.log(taskListArr)

describe('Test Delete', () => {
  test('Testing with correct index', () => {
    const newTaskListArr  = deleteTask(taskListArr, 1);
    expect(newTaskListArr).toHaveLength(2)
  })

  test('Test with index < 0', () => {
    const newTaskListArr  = deleteTask(taskListArr,-1);
    expect(newTaskListArr).toHaveLength(3)
  })

  test('Test with index > length', () => {
    const newTaskListArr  = deleteTask(taskListArr, 5);
    expect(newTaskListArr).toHaveLength(3)
  })


})
