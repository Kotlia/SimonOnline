"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Listener = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Listener = /*#__PURE__*/function () {
  function Listener() {
    _classCallCheck(this, Listener);
  }

  _createClass(Listener, null, [{
    key: "$",
    value: function $(id) {
      return document.getElementById(id);
    }
  }, {
    key: "$_",
    value: function $_(className) {
      return document.getElementsByClassName(className);
    }
  }]);

  return Listener;
}();

exports.Listener = Listener;