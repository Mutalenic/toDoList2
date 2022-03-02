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
  const li = document.createElement('li');
  document.querySelector('.inputTask').value = '';
  li.innerHTML = task;
  tDList.append(li);
  return false;
};