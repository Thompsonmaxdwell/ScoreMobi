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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/header/navToggle.js":
/*!*********************************!*\
  !*** ./src/header/navToggle.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet navToggle = (nav, header_right) => {\n\tif (nav.className == 'nav_close') {\n\t\tnav.classList.add('nav_open');\n\t\theader_right.classList.add('header_right_open');\n\t} else {\n\t\tnav.classList.remove('nav_open');\n\t\theader_right.classList.remove('header_right_open');\n\t}\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navToggle);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVhZGVyL25hdlRvZ2dsZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oZWFkZXIvbmF2VG9nZ2xlLmpzP2RhOWEiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IG5hdlRvZ2dsZSA9IChuYXYsIGhlYWRlcl9yaWdodCkgPT4ge1xuXHRpZiAobmF2LmNsYXNzTmFtZSA9PSAnbmF2X2Nsb3NlJykge1xuXHRcdG5hdi5jbGFzc0xpc3QuYWRkKCduYXZfb3BlbicpO1xuXHRcdGhlYWRlcl9yaWdodC5jbGFzc0xpc3QuYWRkKCdoZWFkZXJfcmlnaHRfb3BlbicpO1xuXHR9IGVsc2Uge1xuXHRcdG5hdi5jbGFzc0xpc3QucmVtb3ZlKCduYXZfb3BlbicpO1xuXHRcdGhlYWRlcl9yaWdodC5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfcmlnaHRfb3BlbicpO1xuXHR9XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IG5hdlRvZ2dsZTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/header/navToggle.js\n");

/***/ }),

/***/ "./src/header/navbar.js":
/*!******************************!*\
  !*** ./src/header/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navToggle */ \"./src/header/navToggle.js\");\n\nlet bars = document.querySelectorAll('#bars');\n\nconst navbar = () => {\n\tif (bars.length >= 1) {\n\t\tbars.forEach((bar) => {\n\t\t\tbar.addEventListener('click', (e) => {\n\t\t\t\tlet header_right = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(\n\t\t\t\t\t'#header_right'\n\t\t\t\t);\n\t\t\t\tlet nav = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector(\n\t\t\t\t\t'#nav'\n\t\t\t\t);\n\t\t\t\tbar.classList.toggle('change');\n\t\t\t\tObject(_navToggle__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(nav, header_right);\n\t\t\t});\n\t\t});\n\t} else {\n\t\tlet bar = document.querySelector('#bars');\n\t\tlet header_right = document.querySelector('#header_right');\n\n\t\tbar.addEventListener('click', (e) => {\n\t\t\tObject(_navToggle__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(nav, header_right);\n\t\t});\n\t}\n};\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navbar);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGVhZGVyL25hdmJhci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oZWFkZXIvbmF2YmFyLmpzP2Y0YzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5hdlRvZ2dsZSBmcm9tICAnLi9uYXZUb2dnbGUnO1xubGV0IGJhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYmFycycpO1xuXG5jb25zdCBuYXZiYXIgPSAoKSA9PiB7XG5cdGlmIChiYXJzLmxlbmd0aCA+PSAxKSB7XG5cdFx0YmFycy5mb3JFYWNoKChiYXIpID0+IHtcblx0XHRcdGJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdGxldCBoZWFkZXJfcmlnaHQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0XHQnI2hlYWRlcl9yaWdodCdcblx0XHRcdFx0KTtcblx0XHRcdFx0bGV0IG5hdiA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHRcdCcjbmF2J1xuXHRcdFx0XHQpO1xuXHRcdFx0XHRiYXIuY2xhc3NMaXN0LnRvZ2dsZSgnY2hhbmdlJyk7XG5cdFx0XHRcdG5hdlRvZ2dsZShuYXYsIGhlYWRlcl9yaWdodCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHRsZXQgYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JhcnMnKTtcblx0XHRsZXQgaGVhZGVyX3JpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcl9yaWdodCcpO1xuXG5cdFx0YmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcblx0XHRcdG5hdlRvZ2dsZShuYXYsIGhlYWRlcl9yaWdodCk7XG5cdFx0fSk7XG5cdH1cbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBuYXZiYXI7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/header/navbar.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slide_slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide/slide */ \"./src/slide/slide.js\");\n/* harmony import */ var _header_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/navbar */ \"./src/header/navbar.js\");\n/* harmony import */ var _tabs_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/tabs */ \"./src/tabs/tabs.js\");\nconst nextButtons = document.querySelectorAll('.carousel_button-right');\nconst prevButtons = document.querySelectorAll('.carousel_button-left');\n\n\n\n\n\n\n/*****************************************************************************/\n\nnextButtons.forEach(nextButton => nextButton.addEventListener('click', _slide_slide__WEBPACK_IMPORTED_MODULE_0__[\"moveSlideToRight\"]))\nprevButtons.forEach(prevButton => prevButton.addEventListener('click', _slide_slide__WEBPACK_IMPORTED_MODULE_0__[\"moveSlideToLeft\"]))\n// setInterval(moveSlideToRight, 5000);\n/*****************************************************************************/\n\n// tabs of the league page section\nObject(_header_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\nObject(_tabs_tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuZXh0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbF9idXR0b24tcmlnaHQnKTtcbmNvbnN0IHByZXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX2J1dHRvbi1sZWZ0Jyk7XG5cbmltcG9ydCB7bW92ZVNsaWRlVG9SaWdodCwgbW92ZVNsaWRlVG9MZWZ0IH0gZnJvbSAnLi9zbGlkZS9zbGlkZSc7XG5pbXBvcnQgbmF2RnVuICBmcm9tICcuL2hlYWRlci9uYXZiYXInO1xuaW1wb3J0IHRhYiBmcm9tICcuL3RhYnMvdGFicyc7XG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5uZXh0QnV0dG9ucy5mb3JFYWNoKG5leHRCdXR0b24gPT4gbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vdmVTbGlkZVRvUmlnaHQpKVxucHJldkJ1dHRvbnMuZm9yRWFjaChwcmV2QnV0dG9uID0+IHByZXZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb3ZlU2xpZGVUb0xlZnQpKVxuLy8gc2V0SW50ZXJ2YWwobW92ZVNsaWRlVG9SaWdodCwgNTAwMCk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbi8vIHRhYnMgb2YgdGhlIGxlYWd1ZSBwYWdlIHNlY3Rpb25cbm5hdkZ1bigpXG50YWIoKVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/slide/slide.js":
/*!****************************!*\
  !*** ./src/slide/slide.js ***!
  \****************************/
/*! exports provided: moveSlideToRight, moveSlideToLeft, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveSlideToRight\", function() { return moveSlideToRight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveSlideToLeft\", function() { return moveSlideToLeft; });\nconst tracks = document.querySelectorAll('.carousel_track');\nconst slides = Array.from(tracks);\nconst dotsNavs = document.querySelectorAll('.carousel_nav');\nconst slideWidth = slides[0].children[0].getBoundingClientRect().width;\n\n\n// arrange slide next  each other \ntracks.forEach(track => {\n    const slides = Array.from(track.children);\n    slides.forEach((slide, index) => {\n        slide.style.left = slideWidth * index + 'px';\n\n    })\n\n})\n\nconst moveToSlide = (track, currentSlide, targetSlide) => {\n    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';\n    currentSlide.classList.remove('current_slide');\n    targetSlide.classList.add('current_slide');\n\n}\n// My Dot indicator function\nconst updateDots = (currentDot, targetDot) => {\n    currentDot.classList.remove('current_slide');\n    targetDot.classList.add('current_slide');\n}\n\n\n\n// // When i click left, move slide to the left\nconst moveSlideToRight = e => {\n\n    let track = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('.carousel_track');\n    const currentSlide = track.querySelector('.current_slide');\n    const nextSlide = currentSlide.nextElementSibling;\n    \n\n    \n    let dotsNav =  e.target.parentElement.parentElement.parentElement.querySelector('.carousel_nav')\n    let currentDot = dotsNav.querySelector('.current_slide');\n    let nextDot = currentDot.nextElementSibling;\n  \n\n    // Reset Slide to first slide , when it reach last the slide   \n    if (!nextSlide) {\n        currentSlide.classList.remove('current_slide');\n        currentDot.classList.remove('current_slide');\n    \n        track.children[0].classList.add('current_slide');\n        dotsNav.children[0].classList.add('current_slide');\n       \n\n        track.style.transition = '5ms ';\n        track.style.transform = 'translateX(-' + 0 + ')';\n        return\n    }\n    track.style.transition = 'transform 250ms ease-in';\n    moveToSlide(track, currentSlide, nextSlide);\n    updateDots(currentDot, nextDot);\n}\n\n\n// // When i click right, move slide to the right\nconst moveSlideToLeft = e => {\n    let track = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('.carousel_track');\n    const currentSlide = track.querySelector('.current_slide');\n    const prevSlide = currentSlide.previousElementSibling;\n    \n//   Dot indicating the current slide\n    let dotsNav =  e.target.parentElement.parentElement.parentElement.querySelector('.carousel_nav');\n    let currentDot = dotsNav.querySelector('.current_slide');\n    let nextDot = currentDot.previousElementSibling;\n  \n\n    // Reset Slide to first slide , when it reach last the slide   \n    if (!prevSlide) {\n        currentSlide.classList.remove('current_slide');\n        currentDot.classList.remove('current_slide');\n    \n        track.children[track.children.length -1].classList.add('current_slide');\n        dotsNav.children[dotsNav.children.length -1].classList.add('current_slide');\n    \n       \n        track.style.transition = '5ms ';\n        track.style.transform = 'translateX(-' + track.children[track.children.length -1].style.left + ')';\n        return\n    }\n\n    \n    track.style.transition = 'transform 250ms ease-in';\n    moveToSlide(track, currentSlide, prevSlide);\n    updateDots(currentDot, nextDot);\n\n    \n   \n}\n\n\n// // When i click slide nav indicator, move to that slide \ndotsNavs.forEach(dotsNav => {\n\n    dotsNav.addEventListener('click', e => {\n        const targetDot = e.target.closest('button');\n        let track = e.target.parentElement.parentElement.parentElement.parentElement.querySelector('.carousel_track');\n        let dots = Array.from(e.target.parentElement.children);\n        let slides = Array.from(track.children);\n\n        if (!targetDot) return;\n\n        const currentSlide = track.querySelector('.current_slide');\n        const currentDot = dotsNav.querySelector('.current_slide');\n        const targetIndex = dots.findIndex(dot => dot === targetDot);\n        const targetSlide = slides[targetIndex];\n        \n        // /****************************************************************************/\n        moveToSlide(track, currentSlide, targetSlide);\n        updateDots(currentDot, targetDot);\n\n    })\n})\n\t//    remove   transition when it reaches lastElemnt and FirstElement\n\tslide_container.addEventListener('transitionend', slide_container_Event);\n\t// Auto slid\n\tsetInterval(prevSlideEventFun, 5000);\n\t// click  indicator to move the  slide\n\tindicators.addEventListener('click', dostSlide);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (imgSliding);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2xpZGUvc2xpZGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGUvc2xpZGUuanM/NDNjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0cmFja3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWxfdHJhY2snKTtcbmNvbnN0IHNsaWRlcyA9IEFycmF5LmZyb20odHJhY2tzKTtcbmNvbnN0IGRvdHNOYXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsX25hdicpO1xuY29uc3Qgc2xpZGVXaWR0aCA9IHNsaWRlc1swXS5jaGlsZHJlblswXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcblxuXG4vLyBhcnJhbmdlIHNsaWRlIG5leHQgIGVhY2ggb3RoZXIgXG50cmFja3MuZm9yRWFjaCh0cmFjayA9PiB7XG4gICAgY29uc3Qgc2xpZGVzID0gQXJyYXkuZnJvbSh0cmFjay5jaGlsZHJlbik7XG4gICAgc2xpZGVzLmZvckVhY2goKHNsaWRlLCBpbmRleCkgPT4ge1xuICAgICAgICBzbGlkZS5zdHlsZS5sZWZ0ID0gc2xpZGVXaWR0aCAqIGluZGV4ICsgJ3B4JztcblxuICAgIH0pXG5cbn0pXG5cbmNvbnN0IG1vdmVUb1NsaWRlID0gKHRyYWNrLCBjdXJyZW50U2xpZGUsIHRhcmdldFNsaWRlKSA9PiB7XG4gICAgdHJhY2suc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLScgKyB0YXJnZXRTbGlkZS5zdHlsZS5sZWZ0ICsgJyknO1xuICAgIGN1cnJlbnRTbGlkZS5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50X3NsaWRlJyk7XG4gICAgdGFyZ2V0U2xpZGUuY2xhc3NMaXN0LmFkZCgnY3VycmVudF9zbGlkZScpO1xuXG59XG4vLyBNeSBEb3QgaW5kaWNhdG9yIGZ1bmN0aW9uXG5jb25zdCB1cGRhdGVEb3RzID0gKGN1cnJlbnREb3QsIHRhcmdldERvdCkgPT4ge1xuICAgIGN1cnJlbnREb3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudF9zbGlkZScpO1xuICAgIHRhcmdldERvdC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50X3NsaWRlJyk7XG59XG5cblxuXG4vLyAvLyBXaGVuIGkgY2xpY2sgbGVmdCwgbW92ZSBzbGlkZSB0byB0aGUgbGVmdFxuZXhwb3J0IGNvbnN0IG1vdmVTbGlkZVRvUmlnaHQgPSBlID0+IHtcblxuICAgIGxldCB0cmFjayA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX3RyYWNrJyk7XG4gICAgY29uc3QgY3VycmVudFNsaWRlID0gdHJhY2sucXVlcnlTZWxlY3RvcignLmN1cnJlbnRfc2xpZGUnKTtcbiAgICBjb25zdCBuZXh0U2xpZGUgPSBjdXJyZW50U2xpZGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIFxuXG4gICAgXG4gICAgbGV0IGRvdHNOYXYgPSAgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX25hdicpXG4gICAgbGV0IGN1cnJlbnREb3QgPSBkb3RzTmF2LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50X3NsaWRlJyk7XG4gICAgbGV0IG5leHREb3QgPSBjdXJyZW50RG90Lm5leHRFbGVtZW50U2libGluZztcbiAgXG5cbiAgICAvLyBSZXNldCBTbGlkZSB0byBmaXJzdCBzbGlkZSAsIHdoZW4gaXQgcmVhY2ggbGFzdCB0aGUgc2xpZGUgICBcbiAgICBpZiAoIW5leHRTbGlkZSkge1xuICAgICAgICBjdXJyZW50U2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudF9zbGlkZScpO1xuICAgICAgICBjdXJyZW50RG90LmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnRfc2xpZGUnKTtcbiAgICBcbiAgICAgICAgdHJhY2suY2hpbGRyZW5bMF0uY2xhc3NMaXN0LmFkZCgnY3VycmVudF9zbGlkZScpO1xuICAgICAgICBkb3RzTmF2LmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnRfc2xpZGUnKTtcbiAgICAgICBcblxuICAgICAgICB0cmFjay5zdHlsZS50cmFuc2l0aW9uID0gJzVtcyAnO1xuICAgICAgICB0cmFjay5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtJyArIDAgKyAnKSc7XG4gICAgICAgIHJldHVyblxuICAgIH1cbiAgICB0cmFjay5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAyNTBtcyBlYXNlLWluJztcbiAgICBtb3ZlVG9TbGlkZSh0cmFjaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpO1xuICAgIHVwZGF0ZURvdHMoY3VycmVudERvdCwgbmV4dERvdCk7XG59XG5cblxuLy8gLy8gV2hlbiBpIGNsaWNrIHJpZ2h0LCBtb3ZlIHNsaWRlIHRvIHRoZSByaWdodFxuZXhwb3J0IGNvbnN0IG1vdmVTbGlkZVRvTGVmdCA9IGUgPT4ge1xuICAgIGxldCB0cmFjayA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX3RyYWNrJyk7XG4gICAgY29uc3QgY3VycmVudFNsaWRlID0gdHJhY2sucXVlcnlTZWxlY3RvcignLmN1cnJlbnRfc2xpZGUnKTtcbiAgICBjb25zdCBwcmV2U2xpZGUgPSBjdXJyZW50U2xpZGUucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICBcbi8vICAgRG90IGluZGljYXRpbmcgdGhlIGN1cnJlbnQgc2xpZGVcbiAgICBsZXQgZG90c05hdiA9ICBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfbmF2Jyk7XG4gICAgbGV0IGN1cnJlbnREb3QgPSBkb3RzTmF2LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50X3NsaWRlJyk7XG4gICAgbGV0IG5leHREb3QgPSBjdXJyZW50RG90LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gIFxuXG4gICAgLy8gUmVzZXQgU2xpZGUgdG8gZmlyc3Qgc2xpZGUgLCB3aGVuIGl0IHJlYWNoIGxhc3QgdGhlIHNsaWRlICAgXG4gICAgaWYgKCFwcmV2U2xpZGUpIHtcbiAgICAgICAgY3VycmVudFNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnRfc2xpZGUnKTtcbiAgICAgICAgY3VycmVudERvdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50X3NsaWRlJyk7XG4gICAgXG4gICAgICAgIHRyYWNrLmNoaWxkcmVuW3RyYWNrLmNoaWxkcmVuLmxlbmd0aCAtMV0uY2xhc3NMaXN0LmFkZCgnY3VycmVudF9zbGlkZScpO1xuICAgICAgICBkb3RzTmF2LmNoaWxkcmVuW2RvdHNOYXYuY2hpbGRyZW4ubGVuZ3RoIC0xXS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50X3NsaWRlJyk7XG4gICAgXG4gICAgICAgXG4gICAgICAgIHRyYWNrLnN0eWxlLnRyYW5zaXRpb24gPSAnNW1zICc7XG4gICAgICAgIHRyYWNrLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0nICsgdHJhY2suY2hpbGRyZW5bdHJhY2suY2hpbGRyZW4ubGVuZ3RoIC0xXS5zdHlsZS5sZWZ0ICsgJyknO1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBcbiAgICB0cmFjay5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAyNTBtcyBlYXNlLWluJztcbiAgICBtb3ZlVG9TbGlkZSh0cmFjaywgY3VycmVudFNsaWRlLCBwcmV2U2xpZGUpO1xuICAgIHVwZGF0ZURvdHMoY3VycmVudERvdCwgbmV4dERvdCk7XG5cbiAgICBcbiAgIFxufVxuXG5cbi8vIC8vIFdoZW4gaSBjbGljayBzbGlkZSBuYXYgaW5kaWNhdG9yLCBtb3ZlIHRvIHRoYXQgc2xpZGUgXG5kb3RzTmF2cy5mb3JFYWNoKGRvdHNOYXYgPT4ge1xuXG4gICAgZG90c05hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXREb3QgPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKTtcbiAgICAgICAgbGV0IHRyYWNrID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfdHJhY2snKTtcbiAgICAgICAgbGV0IGRvdHMgPSBBcnJheS5mcm9tKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgICBsZXQgc2xpZGVzID0gQXJyYXkuZnJvbSh0cmFjay5jaGlsZHJlbik7XG5cbiAgICAgICAgaWYgKCF0YXJnZXREb3QpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjdXJyZW50U2xpZGUgPSB0cmFjay5xdWVyeVNlbGVjdG9yKCcuY3VycmVudF9zbGlkZScpO1xuICAgICAgICBjb25zdCBjdXJyZW50RG90ID0gZG90c05hdi5xdWVyeVNlbGVjdG9yKCcuY3VycmVudF9zbGlkZScpO1xuICAgICAgICBjb25zdCB0YXJnZXRJbmRleCA9IGRvdHMuZmluZEluZGV4KGRvdCA9PiBkb3QgPT09IHRhcmdldERvdCk7XG4gICAgICAgIGNvbnN0IHRhcmdldFNsaWRlID0gc2xpZGVzW3RhcmdldEluZGV4XTtcbiAgICAgICAgXG4gICAgICAgIC8vIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgICBtb3ZlVG9TbGlkZSh0cmFjaywgY3VycmVudFNsaWRlLCB0YXJnZXRTbGlkZSk7XG4gICAgICAgIHVwZGF0ZURvdHMoY3VycmVudERvdCwgdGFyZ2V0RG90KTtcblxuICAgIH0pXG59KVxuXHQvLyAgICByZW1vdmUgICB0cmFuc2l0aW9uIHdoZW4gaXQgcmVhY2hlcyBsYXN0RWxlbW50IGFuZCBGaXJzdEVsZW1lbnRcblx0c2xpZGVfY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzbGlkZV9jb250YWluZXJfRXZlbnQpO1xuXHQvLyBBdXRvIHNsaWRcblx0c2V0SW50ZXJ2YWwocHJldlNsaWRlRXZlbnRGdW4sIDUwMDApO1xuXHQvLyBjbGljayAgaW5kaWNhdG9yIHRvIG1vdmUgdGhlICBzbGlkZVxuXHRpbmRpY2F0b3JzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9zdFNsaWRlKTtcblxuZXhwb3J0IGRlZmF1bHQgaW1nU2xpZGluZztcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/slide/slide.js\n");

/***/ }),

/***/ "./src/tabs/tabs.js":
/*!**************************!*\
  !*** ./src/tabs/tabs.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst tabs = document.querySelectorAll('#tabs ul li');\nconst tabs_contents = document.querySelectorAll('.tabs_content')\nconst loader = document.querySelector('.loading_container');\n\n\n function tab() {\nreturn tabs.forEach(function(tab, tab_index) {\n        tab.addEventListener('click',() => {\n    \n            tabs.forEach((tab)=> {\n                tab.classList.remove('active');\n            });\n    \n            tab.classList.add('active');\n    \n            tabs_contents.forEach((content, content_index) => {\n                \n                if(content_index == tab_index){\n                    loader.style.display = \"block\";\n\n                    setTimeout(() => {\n                        loader.style.display = \"none\";\n                        content.style.display = 'block';\n                    }, 1500);\n\n                }else {\n                    content.style.display = 'none';\n                }\n                \n            })\n        })\n    })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tab);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGFicy90YWJzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3RhYnMvdGFicy5qcz83Yzk4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyN0YWJzIHVsIGxpJyk7XG5jb25zdCB0YWJzX2NvbnRlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYnNfY29udGVudCcpXG5jb25zdCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZ19jb250YWluZXInKTtcblxuXG4gZnVuY3Rpb24gdGFiKCkge1xucmV0dXJuIHRhYnMuZm9yRWFjaChmdW5jdGlvbih0YWIsIHRhYl9pbmRleCkge1xuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICBcbiAgICAgICAgICAgIHRhYnMuZm9yRWFjaCgodGFiKT0+IHtcbiAgICAgICAgICAgICAgICB0YWIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBcbiAgICAgICAgICAgIHRhYnNfY29udGVudHMuZm9yRWFjaCgoY29udGVudCwgY29udGVudF9pbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKGNvbnRlbnRfaW5kZXggPT0gdGFiX2luZGV4KXtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgICAgICAgICAgfSwgMTUwMCk7XG5cbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRhYjtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/tabs/tabs.js\n");

/***/ }),

/***/ 1:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ });