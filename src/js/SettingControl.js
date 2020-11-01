import { Listener } from "./Listener.js";
import { Traitable } from "./util/Traitable.js";
import { GameControl } from "./GameControl.js";
import { util } from "./util/Util.js";


export class SettingControl extends Listener {

    static init() {

        if (localStorage.getItem("worldPrefix") == null) {
            localStorage.setItem("worldPrefix", "Start from Stage:")
        }

        ["world", "stage", "difficulity"].forEach(_ => {

            super.$(_).value = localStorage.getItem(_) == undefined 
            ? super.$(_).children[0].innerHTML
            : localStorage.getItem(_)

            if (_ != "difficulity") {
                super.$(_).onchange = () => {
                    if (super.$("world").value > 1 || super.$("stage").value > 1) {
                        localStorage.setItem("worldPrefix", "Resume from Stage:")
                    } else {
                        localStorage.setItem("worldPrefix", "Start from Stage:")
                    }
    
                    new Traitable(localStorage).with({
                        world: parseInt(super.$("world").value),
                        stage: parseInt(super.$("stage").value),
                        difficulity: super.$("difficulity").value
                    })
    
                    location.reload()
                }
            }
        })
        super.$("world").dataset.prefix = localStorage.getItem("worldPrefix")


        super.$("StartButton").addEventListener('click', () => {
            const element = super.$("StartButton")

            switch (super.$("difficulity").value) {
                case "Eazy":
                    globalThis.rememberTime += 200
                    break;
                case "Hard":
                    globalThis.rememberTime -= 200
                    break;
                default:
                    break;
            }
            new Traitable(globalThis).with({
                world: parseInt(super.$("world").value),
                stage: parseInt(super.$("stage").value),
                isGameActive: true
            })

            super.$("selection").remove()


            super.$("scoreboard").innerText =
                globalThis.world + globalThis.stage > 2
                    ? `You've resumed the game from ${globalThis.world}-${globalThis.stage}!`
                    : "You've started a new game. Good luck!"

            let op = 1;
            const timer = setInterval(() => {
                if (op <= 0.1) {
                    clearInterval(timer);
                    element.style.display = 'none';
                    setTimeout(() => {
                        GameControl.build()
                    }, 500)
                }
                new Traitable(element["style"])
                    .with({
                        opacity: op,
                        filter: 'alpha(opacity=' + op * 100 + ")"
                    })
                op *= 0.6;
            }, 50);

            util.range(parseInt(super.$("title").style["margin-top"].slice(0, 2)), 20)
                .forEach((_, i) => {
                    util.range(0, 10).forEach(it => {
                        setTimeout(() => {
                            super.$("title").style["margin-top"] = `${_}.${it}vh`
                        }, 30 * i)
                    })
                })

        }, false)

    }

}