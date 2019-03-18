// import Timer from './timer';

// const audio = document.querySelector('audio');
// const breakContainer = document.querySelector('.pomodoro__break');
// const minusBreaks = document.querySelector('#minusBreaks');
// const addBreaks = document.querySelector('#addBreaks');
// const deadline = Timer.getFutureTime(25); // default 25 minutes
// const breakNum = document.querySelector('.pomodoro__break-number');
// const startButton = document.querySelector('.pomodoro__button-primary');
// let count = parseInt(breakNum.innerText, 10);

// setInterval(Timer.initializeClock(25), 1000);

// const hideElement =    (el) => {
//     // Todo: add spread operator for multiple elements
//     // QuerySelectorAll()
//     const element = el;
//     element.style.display = 'none';
// };

// startButton.addEventListener('click', (e) => {
//     hideElement(startButton);
//     hideElement(breakContainer);

//     e.preventDefault(); e.stopPropagation();
//     const counter = setInterval(timer, 1000);

//     function timer() {
//         let startBreak;
//         count -= 1;
//         if (count === 0) {
//             audio.play();
//             clearInterval(counter);
//             startBreak = setInterval(breakTimer, 1000);
//         }
//         breakNum.innerHTML = count;

//         function breakTimer() {
//             const title = document.querySelector('.pomodoro__timer-task');
//             title.innerText = 'Break Time';
//             breakTime -= 1;
//             if (breakTime === 0) {
//                 clearInterval(startBreak);
//             }
//         }
//     }
// });

// minusBreaks.addEventListener('click', (e) => {
//     if (count <= 0) {
//         e.preventDefault();
//         return false;
//     }
//     e.stopPropagation();
//     count -= 1;
//     breakNum.innerText = count;
//     return true;
// });

// addBreaks.addEventListener('click', (e) => {
//     e.stopPropagation();
//     count += 1;
//     breakNum.innerText = count;
//     return true;
// });

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}
function initializeClock(className, endtime) {
    var clock = document.querySelector(className);


    var minutesSpan = clock.querySelector('.pomodoro__minutes');
    var secondsSpan = clock.querySelector('.pomodoro__seconds');
    function updateClock() {
        var t = getTimeRemaining(endtime);


        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}
var deadline = "August 26 2019 16:29:59 GMT-0500";
initializeClock('.pomodoro', deadline);