// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  goal = document.getElementById('goal');

//SHOW TIME

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //SET AM OR PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  //12 Hour Format
  hour = hour % 12 || 12;

  //Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;

  setTimeout(showTime, 1000);
}

function addZero(x) {
  return (x < 10 ? '0' : '') + x;
}

//Background

function timeGreeting() {
  let today = new Date(),
    hour = today.getHours();

  if (hour > 17) {
    greeting.innerText = 'Good Evening,';
    document.body.style.backgroundImage = 'url(./img/night.jpg)';
    document.body.style.color = 'white';
  } else if (hour < 12) {
    greeting.innerText = 'Good Morning,';
    document.body.style.backgroundImage = 'url(./img/morning.jpg)';
  } else {
    greeting.innerText = 'Good Afternoon,';
    document.body.style.backgroundImage = 'url(./img/afternoon.jpg)';
  }
}

//Name

function getName() {
  console.log('HERE??');
  if (localStorage.getItem('name') === null) {
    console.log('HERE');
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

function findGoal() {
  if (localStorage.getItem('goal') == null) {
    goal.textContent = '[Enter Goal]';
  } else {
    goal.textContent = localStorage.getItem('goal');
  }
}

function setName(e) {
  if (e.type == 'keypress') {
    if (e.key == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

//Goal

function setGoal(e) {
  if (e.type == 'keypress') {
    if (e.key == 13) {
      localStorage.setItem('goal', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('goal', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

goal.addEventListener('keypress', setGoal);
goal.addEventListener('blur', setGoal);

showTime();
timeGreeting();
getName();
findGoal();
