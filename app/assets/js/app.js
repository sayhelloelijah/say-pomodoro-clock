

const endAudio = document.querySelector('.pomodoro__audio--end');
const tickAudio = document.querySelector('.pomodoro__audio--tick');
const timerBorder = document.querySelector('.pomodoro__timer-circle');
const breakContainer = document.querySelector('.pomodoro__break');
const minusBreaks = document.querySelector('#minusBreaks');
const addBreaks = document.querySelector('#addBreaks');
const breakNum = document.querySelector('.pomodoro__break-number');
const startButton = document.querySelector('.pomodoro__button-primary');

let count = 0;
let number = parseInt(breakNum.innerText, 10);

const hideElement = (el) => {
    // Todo: add spread operator for multiple elements
    // QuerySelectorAll()
    const element = el;
    element.style.display = 'none';
};

function timeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        total: t,
        days,
        hours,
        minutes,
        seconds,
    };
}

function runClock(id, minutes) {
    const deadline = new Date(Date.parse(new Date()) + minutes*60*1000);
    const clock = document.querySelector(id);
    const timerBorder = document.querySelector('.pomodoro__timer-circle');
    timerBorder.style.animationDuration = `${minutes * 60}s`;

    function updateClock() {
        const t = timeRemaining(deadline);
        const minutesSpan = clock.querySelector('.pomodoro__minutes');
        const secondsSpan = clock.querySelector('.pomodoro__seconds');
        tickAudio.volume = 0.25;

        if (!tickAudio) return;
        tickAudio.currentTime = 0;
        minutesSpan.innerHTML = (`0${t.minutes}`).slice(-2);
        secondsSpan.innerHTML = (`0${t.seconds}`).slice(-2);
        tickAudio.play();
        if (t.total <= 0) {
            clearInterval(timeinterval);
            endAudio.play();
            count += 1;

            if (count == Number(breakNum.innerText)) {
                clearInterval(timeinterval);
            } else if ((count % 2) === 0) {
                runClock('.pomodoro', 25);
            } else {
                runClock('.pomodoro', 5);
            }
        }
    }

    updateClock(); // run function once at first to avoid delay
    const timeinterval = setInterval(updateClock, 1000);
}

startButton.addEventListener('click', (e) => {
    hideElement(startButton);
    hideElement(breakContainer);

    e.preventDefault(); e.stopPropagation();
    timerBorder.classList.add('pomodoro__timer-circle--play');
    runClock('.pomodoro', 25);
});

minusBreaks.addEventListener('click', (e) => {
    if (number <= 0) {
        e.preventDefault();
        return false;
    }
    e.stopPropagation();
    number -= 1;
    breakNum.innerText = number;
    return true;
});

addBreaks.addEventListener('click', (e) => {
    e.stopPropagation();
    number += 1;
    breakNum.innerText = number;
    return true;
});
