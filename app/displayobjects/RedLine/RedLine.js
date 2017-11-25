/**
 * Red line gfx
 *
 * Uses Tweening
 *
 * @exports RedLine
 * @extends Sprite
 */

import { Sprite, Texture } from 'pixi.js';
import LINE from './line.png';
import { Tween, Easing } from 'es6-tween';
import { randomRange } from '../../utils';

export default class RedLine extends Sprite {
  constructor(x, y) {
    const texture = Texture.fromImage(LINE);
    const offset = randomRange(-500, 500);
    super(texture);
    this.alpha = 0.333;
    this.position.set(x, randomRange(y - 100, y + 200));
    new Tween(this.position)
      .to({ y: y + offset }, randomRange(20000, 40000))
      .repeat(Infinity)
      .yoyo(true)
      .easing(Easing.Quadratic.InOut)
      .start();
  }
}
