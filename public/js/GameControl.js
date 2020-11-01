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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () { })); return true; } catch (e) { return false; } }

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
    value: function init() { }
  }, {
    key: "build",
    value: function () {
      var _build = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var isReload,
          parent,
          backup,
          _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                isReload = _args.length > 0 && _args[0] !== undefined ? _args[0] : false;
                parent = _get(_getPrototypeOf(GameControl), "$", this).call(this, "GameControl");
                backup = globalThis.waitTime;

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

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function build() {
        return _build.apply(this, arguments);
      }

      return build;
    }()
  }, {
    key: "run",
    value: function () {
      var _run = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this2 = this;

        var ans;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                ans = globalThis.answer;
                ans.forEach(function (_, i) {
                  setTimeout(function () {
                    _this2.light(_get(_getPrototypeOf(GameControl), "$", _this2).call(_this2, _), true);

                    setTimeout(function () {
                      _this2.light(_get(_getPrototypeOf(GameControl), "$", _this2).call(_this2, [_]), false);
                    }, globalThis.rememberTime * 0.5);
                  }, globalThis.rememberTime * i);
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function run() {
        return _run.apply(this, arguments);
      }

      return run;
    }()
  }, {
    key: "onClick",
    value: function () {
      var _onClick = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
        var _this3 = this;

        var i, icon;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                i = 0;
                icon = document.createElement("a");
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

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function onClick(_x) {
        return _onClick.apply(this, arguments);
      }

      return onClick;
    }()
  }, {
    key: "light",
    value: function () {
      var _light = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(el, option) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                el.style.border = option ? "0.3vw solid white" : null;

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function light(_x2, _x3) {
        return _light.apply(this, arguments);
      }

      return light;
    }()
  }]);

  return GameControl;
}(_Listener2.Listener);

exports.GameControl = GameControl;