function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export class util extends Object {}

_defineProperty(util, "range", (...args) => {
  if (args.length === 2) {
    return Array.from({
      length: args[1] - args[0] + 1
    }, (v, k) => k + args[0]);
  }

  return [...new Array(args[0] + 1).keys()];
});

_defineProperty(util, "randomLevel", el => {
  const arr = util.range(globalThis.world + 1);
  return arr[arr.length * Math.random() | 0];
});