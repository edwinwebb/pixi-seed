import { Tween } from "es6-tween";
import { Sprite, Texture } from "pixi.js";
import BUNNY from "./bunny.png";

/**
 * A bunny which spins on it's feet when moused over
 *
 * @exports Bunny
 * @extends Sprite
 */
export default class Bunny extends Sprite {
  constructor() {
    const texture = Texture.fromImage(BUNNY);

    super(texture);

    this.tween = new Tween(this);
    this.anchor.x = 0.5;
    this.anchor.y = 1;

    this.pivot.x = 0.5;
    this.pivot.y = 0.5;

    this.interactive = true;
    this.on("mouseover", this.startSpin.bind(this));
  }

  startSpin() {
    if (!this.tween.isPlaying()) {
      this.tween.to({ rotation: this.rotation + Math.PI * 2 }, 333).start();
    }
  }
}
