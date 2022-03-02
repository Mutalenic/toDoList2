// import './style.css';

const tDList = document.querySelector('.tDList');
document.querySelector('#submit').disabled = true;
document.querySelector('.inputTask').onkeyup = () => {
  if (document.querySelector('.inputTask').value.length > 0) {
    document.querySelector('#submit').disabled = false;
  } else {
    document.querySelector('#submit').disabled = true;
  }
};

// form submission
document.querySelector('form').onsubmit = () => {
  const task = document.querySelector('.inputTask').value;
  // get list value from user
  const list = document.createElement('li');
  list.classList.add('displayTdl');
  // create button
  const tdldisplayContainer = document.createElement('div');
  tdldisplayContainer.innerHTML = (<input type='checkbox' class='checkbox'></input>);
  tdldisplayContainer.classList.add('tdldisplayContainer');
  list.appendChild(tdldisplayContainer);
  list.innerHTML = task;
  tDList.append(list);
  // delete list
  const deleteContainer = document.querySelector('div');
  deleteContainer.innerHTML = (<i class='fa-solid fa-ellipsis-vertical'></i>);
  list.appendChild(deleteContainer);

  document.querySelector('.inputTask').value = '';
  // list.innerHTML = task;

  return false;
};
