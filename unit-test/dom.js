export const dom = `
<div id="tasks" class="flex-center">
<div class="task-list flex-center">
<div class="container flex-center">
<span class="title">Today's To Do</span>
 <span class="reload">
 <i class="fas fa-sync-alt"></i>
 </span></div>
 <div class="container flex-center">
 
 <form id="add-task" class="flex-center"><input id="add-task-input" placeholder="Add to your list"> <button type="submit" aria-label="Add new task"><i class="fa fa-plus-circle"></i></button></form></div>
 
 <ul class="task-list-container">
 <li class="container task flex-center" draggable="true">
    <span class="left flex-center">
     <input id="2022-03-11T11:24:32.434Z" type="checkbox" class="checkbox">
     <form class="edit-form" action="/">
       <input data-index-number="2022-03-11T11:24:32.434Z" value="Task-1" class="edit-task">
     </form>
    </span>
    <button type="submit" class="closeBtn" aria-label="Add new task">
    </button>
   </li>
   
   <li class="container task flex-center" draggable="true">
    <span class="left flex-center">
     <input id="2022-03-11T11:24:36.516Z" type="checkbox" class="checkbox">
     <form class="edit-form" action="/">
       <input data-index-number="2022-03-11T11:24:36.516Z" value="Task-2" class="edit-task">
     </form>
    </span>
    <button type="submit" class="closeBtn" aria-label="Add new task">
    </button>
   </li>
   <li class="container task flex-center" draggable="true">
    <span class="left flex-center">
     <input id="2022-03-11T14:20:37.415Z" type="checkbox" class="checkbox">
     <form class="edit-form" action="/">
       <input data-index-number="2022-03-11T14:20:37.415Z" value="Task-3" class="edit-task">
     </form>
    </span>
    <button type="submit" class="closeBtn" aria-label="Add new task">
    </button>
   </li></ul><button class="container btn clear-task" type="button">Clear all completed</button></div></div>
`;