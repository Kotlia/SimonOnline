import { GameControl } from "./GameControl.js";
import { SettingControl } from "./SettingControl.js";
import { Traitable } from "./util/Traitable.js";
import { VisualController } from "./VisualController.js";

window.onload = () => {
  Main.init();
};

export class Main {
  static init() {
    new Traitable(globalThis).with({
      isGameActive: true,
      answer: [],
      waitTime: 500,
      rememberTime: 500
    });
    new Array(GameControl, SettingControl, VisualController).forEach(it => it.init());
  }

}