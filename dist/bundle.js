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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slide_slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slide/slide */ \"./src/slide/slide.js\");\n/* harmony import */ var _header_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/navbar */ \"./src/header/navbar.js\");\n/* harmony import */ var _tabs_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/tabs */ \"./src/tabs/tabs.js\");\nconst nextButton = document.querySelector('.carousel_button-right');\nconst prevButton = document.querySelector('.carousel_button-left');\n\n\n\n\n\n\n\n/*****************************************************************************/\nnextButton.addEventListener('click', _slide_slide__WEBPACK_IMPORTED_MODULE_0__[\"moveSlideToRight\"]);\nprevButton.addEventListener('click', _slide_slide__WEBPACK_IMPORTED_MODULE_0__[\"moveSlideToLeft\"]);\nsetInterval(_slide_slide__WEBPACK_IMPORTED_MODULE_0__[\"moveSlideToRight\"], 5000);\n/*****************************************************************************/\n\n// tabs of the league page section\nObject(_header_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\nObject(_tabs_tabs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX2J1dHRvbi1yaWdodCcpO1xuY29uc3QgcHJldkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbF9idXR0b24tbGVmdCcpO1xuXG5pbXBvcnQge21vdmVTbGlkZVRvUmlnaHQsIG1vdmVTbGlkZVRvTGVmdCB9IGZyb20gJy4vc2xpZGUvc2xpZGUnO1xuaW1wb3J0IG5hdkZ1biAgZnJvbSAnLi9oZWFkZXIvbmF2YmFyJztcbmltcG9ydCB0YWIgZnJvbSAnLi90YWJzL3RhYnMnO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xubmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vdmVTbGlkZVRvUmlnaHQpO1xucHJldkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vdmVTbGlkZVRvTGVmdCk7XG5zZXRJbnRlcnZhbChtb3ZlU2xpZGVUb1JpZ2h0LCA1MDAwKTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuLy8gdGFicyBvZiB0aGUgbGVhZ3VlIHBhZ2Ugc2VjdGlvblxubmF2RnVuKClcbnRhYigpXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/slide/slide.js":
/*!****************************!*\
  !*** ./src/slide/slide.js ***!
  \****************************/
/*! exports provided: moveSlideToRight, moveSlideToLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveSlideToRight\", function() { return moveSlideToRight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"moveSlideToLeft\", function() { return moveSlideToLeft; });\n\nconst track = document.querySelector('.carousel_track');\nconst slides = Array.from(track.children);\nconst dotsNav = document.querySelector('.carousel_nav');\nconst dots = Array.from(dotsNav.children);\nconst slideWidth = slides[0].getBoundingClientRect().width;\n\n\n\n// setSlidePosition\nconst setSlidePosition = (slide, index) => {\n    slide.style.left = slideWidth * index + 'px';\n};\nslides.forEach(setSlidePosition);\n\nconst moveToSlide = (track, currentSlide, targetSlide) => {\n    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';\n    currentSlide.classList.remove('current_slide');\n    targetSlide.classList.add('current_slide');\n\n}\n\nconst updateDots = (currentDot, targetDot) => {\n    currentDot.classList.remove('current_slide');\n    targetDot.classList.add('current_slide');\n}\n\n\n\n// When i click left, move slide to the left\nconst moveSlideToRight = e => {\n    const currentSlide = track.querySelector('.current_slide');\n    const nextSlide = currentSlide.nextElementSibling;\n    const currentDot = dotsNav.querySelector('.current_slide');\n    const nextDot = currentDot.nextElementSibling;\n\n\n    // Reset Slide to first slide , when it reach last slide   \n    if (!nextSlide) {\n        currentSlide.classList.remove('current_slide');\n        currentDot.classList.remove('current_slide');\n\n        slides[0].classList.add('current_slide');\n        dots[0].classList.add('current_slide');\n\n        track.style.transition = '5ms ';\n        track.style.transform = 'translateX(-' + 0 + ')';\n        return\n    }\n    track.style.transition = 'transform 250ms ease-in';\n    moveToSlide(track, currentSlide, nextSlide);\n    updateDots(currentDot, nextDot);\n}\n\n\n// When i click right, move slide to the right\nconst moveSlideToLeft = e => {\n    const currentSlide = track.querySelector('.current_slide');\n    const prevSlide = currentSlide.previousElementSibling;\n    const currentDot = dotsNav.querySelector('.current_slide');\n    const nextDot = currentDot.previousElementSibling;\n\n    // Reset Slide to last slide , when it reach first slide   \n    if (!prevSlide) {\n        currentSlide.classList.remove('current_slide');\n        dots[dots.length - 1].classList.add('current_slide');\n\n        currentDot.classList.remove('current_slide');\n        slides[slides.length - 1].classList.add('current_slide');\n\n        track.style.transition = 'none ';\n        track.style.transform = 'translateX(-' + slides[slides.length - 1].style.left + ')';\n\n        return\n    }\n\n    track.style.transition = 'transform 250ms ease-in';\n    moveToSlide(track, currentSlide, prevSlide);\n    updateDots(currentDot, nextDot);\n}\n\n\n// When i click slide nav indicator, move to that slide \ndotsNav.addEventListener('click', e => {\n    const targetDot = e.target.closest('button')\n\n    if (!targetDot) return;\n\n    const currentSlide = track.querySelector('.current_slide');\n    const currentDot = dotsNav.querySelector('.current_slide');\n    const targetIndex = dots.findIndex(dot => dot === targetDot);\n    const targetSlide = slides[targetIndex];\n\n    /*****************************************************************************/\n    moveToSlide(track, currentSlide, targetSlide);\n    updateDots(currentDot, targetDot);\n\n})\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2xpZGUvc2xpZGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGUvc2xpZGUuanM/NDNjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHRyYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsX3RyYWNrJyk7XG5jb25zdCBzbGlkZXMgPSBBcnJheS5mcm9tKHRyYWNrLmNoaWxkcmVuKTtcbmNvbnN0IGRvdHNOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWxfbmF2Jyk7XG5jb25zdCBkb3RzID0gQXJyYXkuZnJvbShkb3RzTmF2LmNoaWxkcmVuKTtcbmNvbnN0IHNsaWRlV2lkdGggPSBzbGlkZXNbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG5cblxuXG4vLyBzZXRTbGlkZVBvc2l0aW9uXG5jb25zdCBzZXRTbGlkZVBvc2l0aW9uID0gKHNsaWRlLCBpbmRleCkgPT4ge1xuICAgIHNsaWRlLnN0eWxlLmxlZnQgPSBzbGlkZVdpZHRoICogaW5kZXggKyAncHgnO1xufTtcbnNsaWRlcy5mb3JFYWNoKHNldFNsaWRlUG9zaXRpb24pO1xuXG5jb25zdCBtb3ZlVG9TbGlkZSA9ICh0cmFjaywgY3VycmVudFNsaWRlLCB0YXJnZXRTbGlkZSkgPT4ge1xuICAgIHRyYWNrLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0nICsgdGFyZ2V0U2xpZGUuc3R5bGUubGVmdCArICcpJztcbiAgICBjdXJyZW50U2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudF9zbGlkZScpO1xuICAgIHRhcmdldFNsaWRlLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnRfc2xpZGUnKTtcblxufVxuXG5jb25zdCB1cGRhdGVEb3RzID0gKGN1cnJlbnREb3QsIHRhcmdldERvdCkgPT4ge1xuICAgIGN1cnJlbnREb3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudF9zbGlkZScpO1xuICAgIHRhcmdldERvdC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50X3NsaWRlJyk7XG59XG5cblxuXG4vLyBXaGVuIGkgY2xpY2sgbGVmdCwgbW92ZSBzbGlkZSB0byB0aGUgbGVmdFxuZXhwb3J0IGNvbnN0IG1vdmVTbGlkZVRvUmlnaHQgPSBlID0+IHtcbiAgICBjb25zdCBjdXJyZW50U2xpZGUgPSB0cmFjay5xdWVyeVNlbGVjdG9yKCcuY3VycmVudF9zbGlkZScpO1xuICAgIGNvbnN0IG5leHRTbGlkZSA9IGN1cnJlbnRTbGlkZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgY29uc3QgY3VycmVudERvdCA9IGRvdHNOYXYucXVlcnlTZWxlY3RvcignLmN1cnJlbnRfc2xpZGUnKTtcbiAgICBjb25zdCBuZXh0RG90ID0gY3VycmVudERvdC5uZXh0RWxlbWVudFNpYmxpbmc7XG5cblxuICAgIC8vIFJlc2V0IFNsaWRlIHRvIGZpcnN0IHNsaWRlICwgd2hlbiBpdCByZWFjaCBsYXN0IHNsaWRlICAgXG4gICAgaWYgKCFuZXh0U2xpZGUpIHtcbiAgICAgICAgY3VycmVudFNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnRfc2xpZGUnKTtcbiAgICAgICAgY3VycmVudERvdC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50X3NsaWRlJyk7XG5cbiAgICAgICAgc2xpZGVzWzBdLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnRfc2xpZGUnKTtcbiAgICAgICAgZG90c1swXS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50X3NsaWRlJyk7XG5cbiAgICAgICAgdHJhY2suc3R5bGUudHJhbnNpdGlvbiA9ICc1bXMgJztcbiAgICAgICAgdHJhY2suc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLScgKyAwICsgJyknO1xuICAgICAgICByZXR1cm5cbiAgICB9XG4gICAgdHJhY2suc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbic7XG4gICAgbW92ZVRvU2xpZGUodHJhY2ssIGN1cnJlbnRTbGlkZSwgbmV4dFNsaWRlKTtcbiAgICB1cGRhdGVEb3RzKGN1cnJlbnREb3QsIG5leHREb3QpO1xufVxuXG5cbi8vIFdoZW4gaSBjbGljayByaWdodCwgbW92ZSBzbGlkZSB0byB0aGUgcmlnaHRcbmV4cG9ydCBjb25zdCBtb3ZlU2xpZGVUb0xlZnQgPSBlID0+IHtcbiAgICBjb25zdCBjdXJyZW50U2xpZGUgPSB0cmFjay5xdWVyeVNlbGVjdG9yKCcuY3VycmVudF9zbGlkZScpO1xuICAgIGNvbnN0IHByZXZTbGlkZSA9IGN1cnJlbnRTbGlkZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIGNvbnN0IGN1cnJlbnREb3QgPSBkb3RzTmF2LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50X3NsaWRlJyk7XG4gICAgY29uc3QgbmV4dERvdCA9IGN1cnJlbnREb3QucHJldmlvdXNFbGVtZW50U2libGluZztcblxuICAgIC8vIFJlc2V0IFNsaWRlIHRvIGxhc3Qgc2xpZGUgLCB3aGVuIGl0IHJlYWNoIGZpcnN0IHNsaWRlICAgXG4gICAgaWYgKCFwcmV2U2xpZGUpIHtcbiAgICAgICAgY3VycmVudFNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnRfc2xpZGUnKTtcbiAgICAgICAgZG90c1tkb3RzLmxlbmd0aCAtIDFdLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnRfc2xpZGUnKTtcblxuICAgICAgICBjdXJyZW50RG90LmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnRfc2xpZGUnKTtcbiAgICAgICAgc2xpZGVzW3NsaWRlcy5sZW5ndGggLSAxXS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50X3NsaWRlJyk7XG5cbiAgICAgICAgdHJhY2suc3R5bGUudHJhbnNpdGlvbiA9ICdub25lICc7XG4gICAgICAgIHRyYWNrLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0nICsgc2xpZGVzW3NsaWRlcy5sZW5ndGggLSAxXS5zdHlsZS5sZWZ0ICsgJyknO1xuXG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRyYWNrLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4nO1xuICAgIG1vdmVUb1NsaWRlKHRyYWNrLCBjdXJyZW50U2xpZGUsIHByZXZTbGlkZSk7XG4gICAgdXBkYXRlRG90cyhjdXJyZW50RG90LCBuZXh0RG90KTtcbn1cblxuXG4vLyBXaGVuIGkgY2xpY2sgc2xpZGUgbmF2IGluZGljYXRvciwgbW92ZSB0byB0aGF0IHNsaWRlIFxuZG90c05hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGNvbnN0IHRhcmdldERvdCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpXG5cbiAgICBpZiAoIXRhcmdldERvdCkgcmV0dXJuO1xuXG4gICAgY29uc3QgY3VycmVudFNsaWRlID0gdHJhY2sucXVlcnlTZWxlY3RvcignLmN1cnJlbnRfc2xpZGUnKTtcbiAgICBjb25zdCBjdXJyZW50RG90ID0gZG90c05hdi5xdWVyeVNlbGVjdG9yKCcuY3VycmVudF9zbGlkZScpO1xuICAgIGNvbnN0IHRhcmdldEluZGV4ID0gZG90cy5maW5kSW5kZXgoZG90ID0+IGRvdCA9PT0gdGFyZ2V0RG90KTtcbiAgICBjb25zdCB0YXJnZXRTbGlkZSA9IHNsaWRlc1t0YXJnZXRJbmRleF07XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgbW92ZVRvU2xpZGUodHJhY2ssIGN1cnJlbnRTbGlkZSwgdGFyZ2V0U2xpZGUpO1xuICAgIHVwZGF0ZURvdHMoY3VycmVudERvdCwgdGFyZ2V0RG90KTtcblxufSlcblxuXG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/slide/slide.js\n");

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