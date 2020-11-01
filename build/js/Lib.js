function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export class Lib {}

_defineProperty(Lib, "colorSet", ["#9F9FBF", "#AF9FBF", "#BF9FBF", "#BF9FAF", "#BF9F9F", "#BFAF9F", "#BFBF9F", "#AFBF9F", "#9FBF9F", "#9FBFAF", "#9FBFBF"]);