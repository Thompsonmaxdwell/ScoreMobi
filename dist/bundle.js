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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/navbar */ \"./src/header/navbar.js\");\n/* harmony import */ var _slide_slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slide/slide */ \"./src/slide/slide.js\");\n\n\n\nObject(_header_navbar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\nObject(_slide_slide__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmF2RnVuICBmcm9tICcuL2hlYWRlci9uYXZiYXInO1xuaW1wb3J0IGltZ1NsaWRpbmcgZnJvbSAnLi9zbGlkZS9zbGlkZSdcblxubmF2RnVuKClcbmltZ1NsaWRpbmcoKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/slide/slide.js":
/*!****************************!*\
  !*** ./src/slide/slide.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slideIndicator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slideIndicator */ \"./src/slide/slideIndicator.js\");\nlet slide_container = document.querySelector('.slide_container');\nlet slides = slide_container.children;\nlet slide_width = slides[0].getBoundingClientRect().width;\nlet next_slide = document.querySelector('.next_slide');\nlet prev_slide = document.querySelector('.prev_slide');\nlet indicators = document.querySelector('.indicator_wrapper');\nlet indicator = document.querySelectorAll('.indicator');\nlet slide_counter = 1;\n\n\nslide_container.style.transform = 'translateX(' + -slide_width * slide_counter + 'px' + ')';\n\n// Next Slide\nconst nextSlideEventFun = () => {\n\tif (slide_counter >= slides.length - 1) return;\n\tslide_container.style.transition = 'transform 250ms ease-in-out';\n\tslide_counter++;\n\tslide_container.style.transform = 'translateX(' + -slide_width * slide_counter + 'px' + ')';\n\tObject(_slideIndicator__WEBPACK_IMPORTED_MODULE_0__[\"rightSlideIndicator\"])(slide_counter);\n};\n\n// Previous Slide\nconst prevSlideEventFun = () => {\n\tif (slide_counter <= 0) return;\n\tslide_container.style.transition = 'transform 250ms ease-in-out';\n\tslide_counter--;\n\tslide_container.style.transform = 'translateX(' + -slide_width * slide_counter + 'px' + ')';\n\tObject(_slideIndicator__WEBPACK_IMPORTED_MODULE_0__[\"leftSlideIndicator\"])(slide_counter);\n};\n\n\n\n//     remove   transition when it reaches lastElemnt and FirstElement\nconst slide_container_Event = (e) => {\n\tif (slides[slide_counter].id === 'last_slide') {\n\t\tslide_container.style.transition = 'none';\n\t\tslide_counter = slides.length - 2;\n\n\t\tslide_container.style.transform = 'translateX(' + -slide_width * slide_counter + 'px' + ')';\n\t}\n\n\tif (slides[slide_counter].id === 'first_slide') {\n\t\tslide_container.style.transition = 'none';\n\t\tslide_counter = slides.length - slide_counter;\n\n\t\tslide_container.style.transform = 'translateX(' + -slide_width * slide_counter + 'px' + ')';\n\t}\n};\n\nconst dostSlide = (e) => {\n\tlet button = e.target.closest('button');\n\tif (!button) return;\n\n\tlet current = indicators.querySelector('.current');\n\tcurrent.classList.remove('current');\n\te.target.classList.add('current');\n\n\tslide_counter = Array.from(indicator).indexOf(e.target) + 1;\n\tslide_container.style.transition = 'transform 250ms ease-in-out';\n\tslide_container.style.transform = 'translateX(' + -slide_width * slide_counter + 'px' + ')';\n};\n\nconst imgSliding = () => {\n\t// //   Next  Slide Event tigger\n\tnext_slide.addEventListener('click', nextSlideEventFun);\n\n\t//   previous Slide Event tigger\n\tprev_slide.addEventListener('click', prevSlideEventFun);\n\n\t//    remove   transition when it reaches lastElemnt and FirstElement\n\tslide_container.addEventListener('transitionend', slide_container_Event);\n\t// Auto slid\n\tsetInterval(prevSlideEventFun, 5000);\n\t// click  indicator to move the  slide\n\tindicators.addEventListener('click', dostSlide);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (imgSliding);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2xpZGUvc2xpZGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGUvc2xpZGUuanM/NDNjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgc2xpZGVfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlX2NvbnRhaW5lcicpO1xubGV0IHNsaWRlcyA9IHNsaWRlX2NvbnRhaW5lci5jaGlsZHJlbjtcbmxldCBzbGlkZV93aWR0aCA9IHNsaWRlc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbmxldCBuZXh0X3NsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5leHRfc2xpZGUnKTtcbmxldCBwcmV2X3NsaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXZfc2xpZGUnKTtcbmxldCBpbmRpY2F0b3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZGljYXRvcl93cmFwcGVyJyk7XG5sZXQgaW5kaWNhdG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmluZGljYXRvcicpO1xubGV0IHNsaWRlX2NvdW50ZXIgPSAxO1xuaW1wb3J0ICB7bGVmdFNsaWRlSW5kaWNhdG9yLCByaWdodFNsaWRlSW5kaWNhdG9yfSBmcm9tICcuL3NsaWRlSW5kaWNhdG9yJztcblxuc2xpZGVfY29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyAtc2xpZGVfd2lkdGggKiBzbGlkZV9jb3VudGVyICsgJ3B4JyArICcpJztcblxuLy8gTmV4dCBTbGlkZVxuY29uc3QgbmV4dFNsaWRlRXZlbnRGdW4gPSAoKSA9PiB7XG5cdGlmIChzbGlkZV9jb3VudGVyID49IHNsaWRlcy5sZW5ndGggLSAxKSByZXR1cm47XG5cdHNsaWRlX2NvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gJ3RyYW5zZm9ybSAyNTBtcyBlYXNlLWluLW91dCc7XG5cdHNsaWRlX2NvdW50ZXIrKztcblx0c2xpZGVfY29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyAtc2xpZGVfd2lkdGggKiBzbGlkZV9jb3VudGVyICsgJ3B4JyArICcpJztcblx0cmlnaHRTbGlkZUluZGljYXRvcihzbGlkZV9jb3VudGVyKTtcbn07XG5cbi8vIFByZXZpb3VzIFNsaWRlXG5jb25zdCBwcmV2U2xpZGVFdmVudEZ1biA9ICgpID0+IHtcblx0aWYgKHNsaWRlX2NvdW50ZXIgPD0gMCkgcmV0dXJuO1xuXHRzbGlkZV9jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9ICd0cmFuc2Zvcm0gMjUwbXMgZWFzZS1pbi1vdXQnO1xuXHRzbGlkZV9jb3VudGVyLS07XG5cdHNsaWRlX2NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgLXNsaWRlX3dpZHRoICogc2xpZGVfY291bnRlciArICdweCcgKyAnKSc7XG5cdGxlZnRTbGlkZUluZGljYXRvcihzbGlkZV9jb3VudGVyKTtcbn07XG5cblxuXG4vLyAgICAgcmVtb3ZlICAgdHJhbnNpdGlvbiB3aGVuIGl0IHJlYWNoZXMgbGFzdEVsZW1udCBhbmQgRmlyc3RFbGVtZW50XG5jb25zdCBzbGlkZV9jb250YWluZXJfRXZlbnQgPSAoZSkgPT4ge1xuXHRpZiAoc2xpZGVzW3NsaWRlX2NvdW50ZXJdLmlkID09PSAnbGFzdF9zbGlkZScpIHtcblx0XHRzbGlkZV9jb250YWluZXIuc3R5bGUudHJhbnNpdGlvbiA9ICdub25lJztcblx0XHRzbGlkZV9jb3VudGVyID0gc2xpZGVzLmxlbmd0aCAtIDI7XG5cblx0XHRzbGlkZV9jb250YWluZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIC1zbGlkZV93aWR0aCAqIHNsaWRlX2NvdW50ZXIgKyAncHgnICsgJyknO1xuXHR9XG5cblx0aWYgKHNsaWRlc1tzbGlkZV9jb3VudGVyXS5pZCA9PT0gJ2ZpcnN0X3NsaWRlJykge1xuXHRcdHNsaWRlX2NvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uID0gJ25vbmUnO1xuXHRcdHNsaWRlX2NvdW50ZXIgPSBzbGlkZXMubGVuZ3RoIC0gc2xpZGVfY291bnRlcjtcblxuXHRcdHNsaWRlX2NvbnRhaW5lci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgLXNsaWRlX3dpZHRoICogc2xpZGVfY291bnRlciArICdweCcgKyAnKSc7XG5cdH1cbn07XG5cbmNvbnN0IGRvc3RTbGlkZSA9IChlKSA9PiB7XG5cdGxldCBidXR0b24gPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKTtcblx0aWYgKCFidXR0b24pIHJldHVybjtcblxuXHRsZXQgY3VycmVudCA9IGluZGljYXRvcnMucXVlcnlTZWxlY3RvcignLmN1cnJlbnQnKTtcblx0Y3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG5cdGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcblxuXHRzbGlkZV9jb3VudGVyID0gQXJyYXkuZnJvbShpbmRpY2F0b3IpLmluZGV4T2YoZS50YXJnZXQpICsgMTtcblx0c2xpZGVfY29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb24gPSAndHJhbnNmb3JtIDI1MG1zIGVhc2UtaW4tb3V0Jztcblx0c2xpZGVfY29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyAtc2xpZGVfd2lkdGggKiBzbGlkZV9jb3VudGVyICsgJ3B4JyArICcpJztcbn07XG5cbmNvbnN0IGltZ1NsaWRpbmcgPSAoKSA9PiB7XG5cdC8vIC8vICAgTmV4dCAgU2xpZGUgRXZlbnQgdGlnZ2VyXG5cdG5leHRfc2xpZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBuZXh0U2xpZGVFdmVudEZ1bik7XG5cblx0Ly8gICBwcmV2aW91cyBTbGlkZSBFdmVudCB0aWdnZXJcblx0cHJldl9zbGlkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByZXZTbGlkZUV2ZW50RnVuKTtcblxuXHQvLyAgICByZW1vdmUgICB0cmFuc2l0aW9uIHdoZW4gaXQgcmVhY2hlcyBsYXN0RWxlbW50IGFuZCBGaXJzdEVsZW1lbnRcblx0c2xpZGVfY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBzbGlkZV9jb250YWluZXJfRXZlbnQpO1xuXHQvLyBBdXRvIHNsaWRcblx0c2V0SW50ZXJ2YWwocHJldlNsaWRlRXZlbnRGdW4sIDUwMDApO1xuXHQvLyBjbGljayAgaW5kaWNhdG9yIHRvIG1vdmUgdGhlICBzbGlkZVxuXHRpbmRpY2F0b3JzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9zdFNsaWRlKTtcbn07XG5leHBvcnQgZGVmYXVsdCBpbWdTbGlkaW5nO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/slide/slide.js\n");

/***/ }),

/***/ "./src/slide/slideIndicator.js":
/*!*************************************!*\
  !*** ./src/slide/slideIndicator.js ***!
  \*************************************/
/*! exports provided: rightSlideIndicator, leftSlideIndicator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rightSlideIndicator\", function() { return rightSlideIndicator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"leftSlideIndicator\", function() { return leftSlideIndicator; });\nlet indicators = document.querySelector('.indicator_wrapper');\nlet indicator = document.querySelectorAll('.indicator');\n\nconst rightSlideIndicator = (slide_counter) => {\n\tlet current = indicators.querySelector('.current');\n\tif (indicator.length + 1 === slide_counter) {\n\t\tcurrent.classList.remove('current');\n\t\tindicator[0].classList.add('current');\n\t\t\n\t\treturn false;\n\t}else {\n\t\tcurrent.classList.remove('current');\n\t\tcurrent.nextElementSibling.classList.add('current');\n\t}\n\n};\n\nconst leftSlideIndicator = (slide_counter) => {\n\tlet current = indicators.querySelector('.current');\n\tif (slide_counter === 0) {\n\t\tcurrent.classList.remove('current');\n\t\tindicator[indicator.length - 1].classList.add('current');\n\t\treturn false;\n\t} else {\n\t\tcurrent.classList.remove('current');\n\t\tcurrent.previousElementSibling.classList.add('current');\n\t}\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2xpZGUvc2xpZGVJbmRpY2F0b3IuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGUvc2xpZGVJbmRpY2F0b3IuanM/MTViYiJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaW5kaWNhdG9ycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmRpY2F0b3Jfd3JhcHBlcicpO1xubGV0IGluZGljYXRvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmRpY2F0b3InKTtcblxuZXhwb3J0IGNvbnN0IHJpZ2h0U2xpZGVJbmRpY2F0b3IgPSAoc2xpZGVfY291bnRlcikgPT4ge1xuXHRsZXQgY3VycmVudCA9IGluZGljYXRvcnMucXVlcnlTZWxlY3RvcignLmN1cnJlbnQnKTtcblx0aWYgKGluZGljYXRvci5sZW5ndGggKyAxID09PSBzbGlkZV9jb3VudGVyKSB7XG5cdFx0Y3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG5cdFx0aW5kaWNhdG9yWzBdLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcblx0XHRcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1lbHNlIHtcblx0XHRjdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcblx0XHRjdXJyZW50Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG5cdH1cblxufTtcblxuZXhwb3J0ICBjb25zdCBsZWZ0U2xpZGVJbmRpY2F0b3IgPSAoc2xpZGVfY291bnRlcikgPT4ge1xuXHRsZXQgY3VycmVudCA9IGluZGljYXRvcnMucXVlcnlTZWxlY3RvcignLmN1cnJlbnQnKTtcblx0aWYgKHNsaWRlX2NvdW50ZXIgPT09IDApIHtcblx0XHRjdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcblx0XHRpbmRpY2F0b3JbaW5kaWNhdG9yLmxlbmd0aCAtIDFdLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZWxzZSB7XG5cdFx0Y3VycmVudC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG5cdFx0Y3VycmVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcblx0fVxufTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/slide/slideIndicator.js\n");

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