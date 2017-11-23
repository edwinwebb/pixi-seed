/**
 * Red line gfx
 *
 * @exports RedLine
 * @extends Sprite
 */

import { Sprite, Texture } from 'pixi.js';
import LINE from './line.png';
import { Tween, Easing } from 'es6-tween';

export default class RedLine extends Sprite {
  constructor(x, y) {
    const texture = Texture.fromImage(LINE);
    const offset = Math.random() * 1000 - 500;
    super(texture);
    this.alpha = 0.333;
    this.position.set(x, y);
    new Tween(this.position)
      .to({ y: y + offset }, 40000)
      .repeat(Infinity)
      .yoyo(true)
      .easing(Easing.Quadratic.InOut)
      .start();
  }

  update() {}
}
