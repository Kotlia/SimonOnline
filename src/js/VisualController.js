import { Listener } from "./Listener.js";

export class VisualController extends Listener {

    static init() {

        $("select").selectOrDie({
            prefix: "From"
        });

        new Typewriter('#title', {
            autoStart: true,
            delay: 100,
            deleteSpeed: 100,
            loop: false
        })
            .typeString('Simon')
            .pauseFor(300)
            .typeString('<span style="color: #BF9F9F;">Onkil</span>')
            .pauseFor(300)
            .deleteChars(3)
            .pauseFor(300)
            .typeString('<span style="color: #BF9F9F;">line</span>')
            .pauseFor(1000)
            .start();

        [...super.$_("btn")].forEach(_ => _.style.cursor = "pointer")
    }

}