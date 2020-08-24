"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _navToggle = _interopRequireDefault(require("./navToggle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var bars = document.querySelectorAll('#bars');

var navFun = function navFun() {
  if (bars.length >= 1) {
    bars.forEach(function (bar) {
      bar.addEventListener('click', function (e) {
        var header_right = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('#header_right');
        var nav = e.target.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('#nav');
        bar.classList.toggle('change');
        (0, _navToggle["default"])(nav, header_right);
      });
    });
  } else {
    var bar = document.querySelector('#bars');
    var header_right = document.querySelector('#header_right');
    bar.addEventListener('click', function (e) {
      (0, _navToggle["default"])(nav, header_right);
    });
  }
};

var _default = navfun;
exports["default"] = _default;