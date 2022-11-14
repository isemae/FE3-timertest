

var hours = document.getElementsByClassName('hour')[ 0 ];
var minutes = document.getElementsByClassName('minute')[ 0 ];
var seconds = document.getElementsByClassName('second')[ 0 ];

var starter = document.getElementById('start');
var stopper = document.getElementById('stop');

var reset = document.getElementById('reset');

let hrs = 0;
let min = 0;
let sec = 0;
var t;

hours.value = 0;
minutes.value = 0;
seconds.value = 0;
/* 
hours.value = "00";
minutes.value = "00";
seconds.value = "00";
 */
starter.onclick = timer;
stopper.onclick = function () {
  clearTimeout(t);
}

function timerMain() {
  if (seconds.value > 0 && (minutes.value >= 0 || hours.value > 0)) {
    seconds.value--;
    if (seconds.value == 0) {
      if (minutes.value < 0 && hours.value > 0) {
        hours.value--;
        seconds.value == 59
      }
      if (seconds.value < 0 && minutes.value > 0) {
        minutes.value--;
        seconds.value = 59;
      } // 분빼서 초로
    }


  } // 초빼기

  if (minutes.value < 0 && hours.value > 0) {
    minutes.value = 59;
    seconds.value = 59;
    hours.value--;
    // 시빼서 분으로
  } if (hours.value === 0 && minutes.value === 0 && seconds.value === 0) {
    stopper.onclick()
  }
}

/* TODO: 누를때마다 실행되는거 */
/* TODO: start/stop 버튼 토글 */
/* TODO: 왜 start 안눌렀는데 시작됨? */
/* TODO: 왜 000에서 숫자입력만하면 안눌렀는데 시작됨? */
/* TODO: */

function subTime() {
  timerMain();
  hours.value = (hrs = 0 ? hrs : hours.value)
  minutes.value = (min = 0 ? min : minutes.value)
  seconds.value = (sec = 0 ? sec : seconds.value)
  timer();
}

function timer() {
  t = setTimeout(subTime, 1000);
}



reset.onclick = function () {
  hours.value = 0;
  minutes.value = 0;
  seconds.value = 0;
}

const minute = document.querySelector('.minute')
minute.addEventListener('keyup', (value) => {
  minute.value = minute.value.replace(/\D/g, '');
  if (minute.value > 59) {
    minute.value = 59;
  }
})

const second = document.querySelector('.second')
second.addEventListener('keyup', (value) => {
  second.value = second.value.replace(/\D/g, '');
  if (second.value > 59) {
    second.value = 59;
  }
})

function handleOnInput(el, maxlength) {
  if (el.value.length > maxlength) {
    el.value = el.value.substr(0, maxlength);
  }
}