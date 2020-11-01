(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GameControl = void 0;

var _Listener2 = require("./Listener.js");

var _Traitable = require("./util/Traitable.js");

var _Util = require("./util/Util.js");

var _Lib = require("./Lib.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var GameControl = /*#__PURE__*/function (_Listener) {
  _inherits(GameControl, _Listener);

  var _super = _createSuper(GameControl);

  function GameControl() {
    _classCallCheck(this, GameControl);

    return _super.apply(this, arguments);
  }

  _createClass(GameControl, null, [{
    key: "init",
    value: function init() {}
  }, {
    key: "build",
    value: function build() {
      var _this = this;

      var isReload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var parent = _get(_getPrototypeOf(GameControl), "$", this).call(this, "GameControl");

      var backup = globalThis.waitTime;

      if (isReload) {
        _toConsumableArray(parent.childNodes).filter(function (_) {
          return _.tagName == "A";
        }).forEach(function (_) {
          return _.remove();
        });

        globalThis.waitTime = 0;
      }

      globalThis.answer = _Util.util.range((globalThis.world - 1) * 3 + globalThis.stage).map(_Util.util.randomLevel);

      _Util.util.range(0, globalThis.world + 1).forEach(function (_, i) {
        setTimeout(function () {
          var child = document.createElement("a");
          child.className = "circle";
          child.style["background-color"] = _Lib.Lib.colorSet[i];
          child.id = i;
          child.addEventListener('click', function () {
            _this.onClick(i);
          }, false);
          parent.appendChild(child);

          if (i == world) {
            setTimeout(function () {
              _this.run();
            }, globalThis.waitTime * 2);
          }
        }, globalThis.waitTime * i);
      });

      if (isReload) {
        globalThis.waitTime = backup;
      }
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      var ans = globalThis.answer;
      ans.forEach(function (_, i) {
        setTimeout(function () {
          _this2.light(_get(_getPrototypeOf(GameControl), "$", _this2).call(_this2, _), true);

          setTimeout(function () {
            _this2.light(_get(_getPrototypeOf(GameControl), "$", _this2).call(_this2, [_]), false);
          }, globalThis.rememberTime * 0.5);
        }, globalThis.rememberTime * i);
      });
    }
  }, {
    key: "onClick",
    value: function onClick(id) {
      var _this3 = this;

      var i = 0;
      var icon = document.createElement("a");
      icon.style["background-color"] = _Lib.Lib.colorSet[id];
      icon.className = "circle-icon";

      _get(_getPrototypeOf(GameControl), "$", this).call(this, "input").appendChild(icon);

      if (globalThis.answer[i] == id) {
        globalThis.answer.shift();

        if (globalThis.answer.length == 0) {
          iziToast.show({
            title: 'Correct!',
            message: "That's the corrent sequence.",
            position: "topCenter",
            timeout: 1500,
            onClosed: function onClosed() {
              if (globalThis.stage < 3) {
                globalThis.stage++;
              } else {
                globalThis.stage = 0;
                globalThis.world++;
              }

              _toConsumableArray(_get(_getPrototypeOf(GameControl), "$", _this3).call(_this3, "input").children).forEach(function (_) {
                return _.remove();
              });

              _get(_getPrototypeOf(GameControl), "$", _this3).call(_this3, "scoreboard").innerText = "Stage: ".concat(globalThis.world, "- Level:").concat(globalThis.stage);

              _this3.build(true);
            }
          });
        }
      } else {
        iziToast.show({
          title: 'Wrong!',
          message: "I'm sorry, you lost...\nClose ME to restart! ⇨",
          position: "topCenter",
          timeout: 1e10,
          onClosing: function onClosing() {
            location.reload();
          }
        });
      }
    }
  }, {
    key: "light",
    value: function light(el, option) {
      el.style.border = option ? "0.3vw solid white" : null;
    }
  }]);

  return GameControl;
}(_Listener2.Listener);

exports.GameControl = GameControl;
},{"./Lib.js":2,"./Listener.js":3,"./util/Traitable.js":7,"./util/Util.js":8}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Lib = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Lib = function Lib() {
  _classCallCheck(this, Lib);
};

exports.Lib = Lib;

_defineProperty(Lib, "colorSet", ["#9F9FBF", "#AF9FBF", "#BF9FBF", "#BF9FAF", "#BF9F9F", "#BFAF9F", "#BFBF9F", "#AFBF9F", "#9FBF9F", "#9FBFAF", "#9FBFBF"]);
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
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
},{"./GameControl.js":1,"./SettingControl.js":5,"./VisualController.js":6,"./util/Traitable.js":7}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SettingControl = void 0;

var _Listener2 = require("./Listener.js");

var _Traitable = require("./util/Traitable.js");

var _GameControl = require("./GameControl.js");

var _Util = require("./util/Util.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var SettingControl = /*#__PURE__*/function (_Listener) {
  _inherits(SettingControl, _Listener);

  var _super = _createSuper(SettingControl);

  function SettingControl() {
    _classCallCheck(this, SettingControl);

    return _super.apply(this, arguments);
  }

  _createClass(SettingControl, null, [{
    key: "init",
    value: function init() {
      var _this = this;

      _get(_getPrototypeOf(SettingControl), "$", this).call(this, "StartButton").addEventListener('click', function () {
        var element = _get(_getPrototypeOf(SettingControl), "$", _this).call(_this, "StartButton");

        switch (_get(_getPrototypeOf(SettingControl), "$", _this).call(_this, "difficulity").value) {
          case "Eazy":
            globalThis.rememberTime += 200;
            break;

          case "Hard":
            globalThis.rememberTime -= 200;
            break;

          default:
            break;
        }

        new _Traitable.Traitable(globalThis)["with"]({
          world: parseInt(_get(_getPrototypeOf(SettingControl), "$", _this).call(_this, "world").value),
          stage: parseInt(_get(_getPrototypeOf(SettingControl), "$", _this).call(_this, "stage").value)
        });

        _get(_getPrototypeOf(SettingControl), "$", _this).call(_this, "selection").remove();

        _get(_getPrototypeOf(SettingControl), "$", _this).call(_this, "scoreboard").innerText = globalThis.world + globalThis.stage > 2 ? "You've resumed the game from ".concat(globalThis.world, "-").concat(globalThis.stage, "!") : "You've started a new game. Good luck!";
        var op = 1;
        var timer = setInterval(function () {
          if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
            setTimeout(function () {
              _GameControl.GameControl.build();
            }, 500);
          }

          new _Traitable.Traitable(element["style"])["with"]({
            opacity: op,
            filter: 'alpha(opacity=' + op * 100 + ")"
          });
          op *= 0.6;
        }, 50);

        _Util.util.range(parseInt(_get(_getPrototypeOf(SettingControl), "$", _this).call(_this, "title").style["margin-top"].slice(0, 2)), 20).forEach(function (_, i) {
          _Util.util.range(0, 10).forEach(function (it) {
            setTimeout(function () {
              _get(_getPrototypeOf(SettingControl), "$", _this).call(_this, "title").style["margin-top"] = "".concat(_, ".").concat(it, "vh");
            }, 30 * i);
          });
        });
      }, false);
    }
  }]);

  return SettingControl;
}(_Listener2.Listener);

exports.SettingControl = SettingControl;
},{"./GameControl.js":1,"./Listener.js":3,"./util/Traitable.js":7,"./util/Util.js":8}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisualController = void 0;

var _Listener2 = require("./Listener.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var VisualController = /*#__PURE__*/function (_Listener) {
  _inherits(VisualController, _Listener);

  var _super = _createSuper(VisualController);

  function VisualController() {
    _classCallCheck(this, VisualController);

    return _super.apply(this, arguments);
  }

  _createClass(VisualController, null, [{
    key: "init",
    value: function init() {
      $("select").selectOrDie({
        prefix: "From"
      });
      new Typewriter('#title', {
        autoStart: true,
        delay: 100,
        deleteSpeed: 100,
        loop: false
      }).typeString('Simon').pauseFor(300).typeString('<span style="color: #BF9F9F;">Onkil</span>').pauseFor(300).deleteChars(3).pauseFor(300).typeString('<span style="color: #BF9F9F;">line</span>').pauseFor(1000).start();

      _toConsumableArray(_get(_getPrototypeOf(VisualController), "$_", this).call(this, "btn")).forEach(function (_) {
        return _.style.cursor = "pointer";
      });
    }
  }]);

  return VisualController;
}(_Listener2.Listener);

exports.VisualController = VisualController;
},{"./Listener.js":3}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Traitable = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Traitable = /*#__PURE__*/function (_Object) {
  _inherits(Traitable, _Object);

  var _super = _createSuper(Traitable);

  function Traitable(obj) {
    var _this;

    _classCallCheck(this, Traitable);

    _this = _super.call(this);
    _this.obj = obj;
    return _this;
  }

  _createClass(Traitable, [{
    key: "with",
    value: function _with(trait) {
      var _this2 = this;

      var e = Object.entries(trait);
      e.map(function (_) {
        if (_typeof(_[1]) == "object") {
          _[1] = Object.entries(_[1]);

          _[1].forEach(function (it) {
            _this2.obj[it[0]] = it[1];
          });
        } else {
          _this2.obj[_[0]] = _[1];
        }
      });
      return this.obj;
    }
  }]);

  return Traitable;
}( /*#__PURE__*/_wrapNativeSuper(Object));

exports.Traitable = Traitable;
},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var util = /*#__PURE__*/function (_Object) {
  _inherits(util, _Object);

  var _super = _createSuper(util);

  function util() {
    _classCallCheck(this, util);

    return _super.apply(this, arguments);
  }

  return util;
}( /*#__PURE__*/_wrapNativeSuper(Object));

exports.util = util;

_defineProperty(util, "range", function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 2) {
    return Array.from({
      length: args[1] - args[0] + 1
    }, function (v, k) {
      return k + args[0];
    });
  }

  return _toConsumableArray(new Array(args[0] + 1).keys());
});

_defineProperty(util, "randomLevel", function (el) {
  var arr = util.range(globalThis.world + 1);
  return arr[arr.length * Math.random() | 0];
});
},{}]},{},[4]);
