/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/js/app.js":
/*!******************************!*\
  !*** ./app/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



const endAudio = document.querySelector('.pomodoro__audio--end');
const tickAudio = document.querySelector('.pomodoro__audio--tick');
const timerBorder = document.querySelector('.pomodoro__timer-circle');
const breakContainer = document.querySelector('.pomodoro__break');
const minusBreaks = document.querySelector('#minusBreaks');
const addBreaks = document.querySelector('#addBreaks');
const breakNum = document.querySelector('.pomodoro__break-number');
const startButton = document.querySelector('.pomodoro__button-primary');
const soundButton = document.querySelector('#soundToggle');

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
        tickAudio.volume = 0.1;

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


/***/ })

/******/ });
//# sourceMappingURL=app.js.map