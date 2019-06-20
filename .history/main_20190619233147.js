// DOM Elements
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus'),
  background = document.getElementsByTagName('body');
console.log(body);

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

showTime();

function addZero(x) {
  return (x < 10 ? '0' : '') + x;
}

//Background

function timeGreeting() {
  let today = new Date(),
    hour = today.getHours();

  if (hour > 17) {
    greeting.innerText = 'Good Evening,';
  } else if (hour < 12) {
    greeting.innerText = 'Good Morning,';
  } else {
    greeting.innerText = 'Good Afternoon,';
  }
}

timeGreeting();
