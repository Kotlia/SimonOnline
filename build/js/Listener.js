export class Listener {
  static $(id) {
    return document.getElementById(id);
  }

  static $_(className) {
    return document.getElementsByClassName(className);
  }

}