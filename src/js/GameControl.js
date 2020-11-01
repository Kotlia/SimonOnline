import { Listener } from "./Listener.js";
import { Traitable } from "./util/Traitable.js";
import { util } from "./util/Util.js";
import { Lib } from './Lib.js'

export class GameControl extends Listener {

    static init() { }

    static build(isReload = false) {

        const parent = super.$("GameControl")
        const backup = globalThis.waitTime

        if (isReload) {
            [...parent.childNodes]
                .filter(_ => _.tagName == "A")
                .forEach(_ => _.remove())
            globalThis.waitTime = 0
        }

        globalThis.answer = util
            .range((globalThis.world - 1) * 3 + globalThis.stage)
            .map(util.randomLevel)
        util.range(0, globalThis.world + 1).forEach((_, i) => {
            setTimeout(() => {
                const child = document.createElement("a")
                child.className = "circle"
                child.style["background-color"] = Lib.colorSet[i]
                child.id = i
                child.addEventListener('click', () => {
                    this.onClick(i)
                }, false)
                parent.appendChild(child)
                if (i == world) {
                    setTimeout(() => {
                        this.run()
                    }, globalThis.waitTime * 2)
                }
            }, globalThis.waitTime * i);
        })

        if (isReload) { globalThis.waitTime = backup }
    }

    static run() {
        const ans = globalThis.answer
        ans.forEach((_, i) => {
            setTimeout(() => {
                this.light(super.$(_), true)
                setTimeout(() => {
                    this.light(super.$([_]), false)
                }, globalThis.rememberTime * 0.5)
            }, globalThis.rememberTime * i);
        })
    }

    static onClick(id) {
        let i = 0
        
        const icon = document.createElement("a")
        icon.style["background-color"] = Lib.colorSet[id]
        icon.className = "circle-icon"
        super.$("input").appendChild(icon)

        if (globalThis.answer[i] == id) {
            globalThis.answer.shift()
            if (globalThis.answer.length == 0) {
                iziToast.show({
                    title: 'Correct!',
                    message: "That's the corrent sequence.",
                    position: "topCenter",
                    timeout: 1500,
                    onClosed: () => {
                        if (globalThis.stage < 3) {
                            globalThis.stage++
                        } else {
                            globalThis.stage = 0
                            globalThis.world++
                        }
                        [...super.$("input").children].forEach(_ => _.remove())
                        super.$("scoreboard").innerText = `Stage: ${globalThis.world}- Level:${globalThis.stage}`
                        this.build(true)
                    }
                });
            }
        } else {
            iziToast.show({
                title: 'Wrong!',
                message: "I'm sorry, you lost...\nClose ME to restart! ⇨",
                position: "topCenter",
                timeout: 1e10,
                onClosing: () => { location.reload() }
            });
        }
    }

    static light(el, option) {
        el.style.border = option ? "0.3vw solid white" : null
    }

}