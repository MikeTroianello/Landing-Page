// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

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

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

showTime();
timeGreeting();
