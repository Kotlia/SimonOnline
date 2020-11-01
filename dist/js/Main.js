"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Main = void 0;

var _GameControl = require("./GameControl.js");

var _SettingControl = require("./SettingControl.js");

var _Traitable = require("./util/Traitable.js");

var _VisualController = require("./VisualController.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.onload = function () {
  return Main.init();
};

var Main = /*#__PURE__*/function () {
  function Main() {
    _classCallCheck(this, Main);
  }

  _createClass(Main, null, [{
    key: "init",
    value: function init() {
      new _Traitable.Traitable(globalThis)["with"]({
        isGameActive: false,
        isUserInputActive: false,
        answer: [],
        waitTime: 500,
        rememberTime: 500
      });
      new Array(_GameControl.GameControl, _SettingControl.SettingControl, _VisualController.VisualController).forEach(function (it) {
        return it.init();
      });
    }
  }]);

  return Main;
}();

exports.Main = Main;