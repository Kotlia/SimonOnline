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