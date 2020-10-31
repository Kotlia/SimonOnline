export class Traitable extends Object {

    constructor(obj) {
        super();
        this.obj = obj
    }

    with(trait) {
        let e = Object.entries(trait)
        e.map(_ => {
            if (typeof _[1] == "object") {
                _[1] = Object.entries(_[1])
                _[1].forEach(it => {
                    this.obj[it[0]] = it[1]
                })
            } else {
                this.obj[_[0]] = _[1]
            }
        })
        return this.obj
    }

}