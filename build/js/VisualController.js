import { Listener } from "./Listener.js";
import { Traitable } from "./util/Traitable.js";
export class VisualController extends Listener {
  static init() {
    $("select").selectOrDie({
      prefix: "From"
    });
    new Typewriter(`#title`, {
      autoStart: true,
      delay: 100,
      deleteSpeed: 100,
      loop: false
    }).typeString(`Simon`).pauseFor(300).typeString(`<span style="color: #BF9F9F;">Onkil</span>`).pauseFor(300).deleteChars(3).pauseFor(300).typeString(`<span style="color: #BF9F9F;">line</span>`).pauseFor(1000).start();
    [...super.$_("btn")].forEach(_ => _.style.cursor = "pointer");
    super.$("shieldsPower").addEventListener(`click`, () => {
      this.onoff();
    }, false);
  }

  static onoff() {
    const percent = 80;
    let css = `html {-webkit-filter: invert(${percent}%);` + `-moz-filter: invert(${percent}%);` + `-o-filter: invert(${percent}%);` + `-ms-filter: invert(${percent}%); }`,
        head = document.getElementsByTagName(`head`)[0],
        style = document.createElement(`style`);

    if (!window.counter) {
      window.counter = 1;
      globalThis.isGameActive = false;
    } else {
      window.counter++;

      if (window.counter % 2 == 0) {
        location.reload();
        css = `html {-webkit-filter: invert(0%); -moz-filter:    invert(0%); -o-filter: invert(0%); -ms-filter: invert(0%); }`;
      }
    }

    ;

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    head.appendChild(style);
    this.inactivate();
    super.$("shieldsPower").src = "https://img.shields.io/badge/power:%20on-OFF-9FBFBF?style=for-the-badge&logo=tinder";
  }

  static inactivate() {
    ["DIV, SELECT, A, SPAN"].forEach(_ => {
      [...document.querySelectorAll(_)].forEach(it => {
        it.style["pointer-events"] = "none";
      });
    });
  }

}