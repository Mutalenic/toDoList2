// import './style.css';

const tDList = document.querySelector('.tDList');
document.querySelector('#submit').disabled = true;
document.querySelector('.inputTask').onkeyup = () => {
  document.querySelector('#submit').disabled = false;
};

// form submission
document.querySelector('form').onsubmit = () => {
  const task = document.querySelector('.inputTask').value;
  const li = document.createElement('li');
  document.querySelector('.inputTask').value = '';
  li.innerHTML = task;
  tDList.append(li);
  return false;
}
