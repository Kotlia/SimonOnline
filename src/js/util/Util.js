export class util extends Object {

    static range = (...args) => {
        if (args.length === 2) {
            return Array.from({length: args[1] - args[0] + 1}, (v, k) => k + args[0])
        }
        return [...new Array(args[0] + 1).keys()]
    }

    static randomLevel = (el) => {
        const arr = this.range(globalThis.world + 1)
        return arr[arr.length * Math.random() | 0]
    }

}