import './style.css';

const tDList = document.querySelector('.tDList');

const arrTdlist = [
  {
    id: 1,
    tdlist: 'Repair my laptop',
    complete: false,
  },
  {
    id: 1,
    tdlist: 'Clean the yard',
    complete: false,
  },
  {
    id: 1,
    tdlist: 'Study javScript',
    complete: false,
  },
];

for (let i = 0; i < arrTdlist.length; i += 1) {
  tDList.innerHTML = `
    ${tDList.innerHTML}
    <li class="displayTdl">
    <div class="tdldisplayContainer"><input type='checkbox' class='checkbox'>
    <p class='tdText' id=${arrTdlist[i].id}> ${arrTdlist[i].tdlist}</p>
    </div>
    <span id='delete'><i class='fa-solid fa-ellipsis-vertical'></i></span>
    </li>
    `;
}
