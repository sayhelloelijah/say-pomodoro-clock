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

/***/ })

/******/ });
//# sourceMappingURL=app.js.map