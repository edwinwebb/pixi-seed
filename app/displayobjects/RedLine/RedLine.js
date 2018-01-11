/**
 * Red line gfx
 *
 * Popmotion Tween Example
 *
 * @exports RedLine
 * @extends Sprite
 */

import { Sprite, Texture } from 'pixi.js';
import LINE from './line.png';
import { randomRange } from '../../utils';
import { easing, tween } from 'popmotion';

export default class RedLine extends Sprite {
  constructor(x, y) {
    const texture = Texture.fromImage(LINE);
    super(texture);
    const offset = randomRange(-500, 500);
    this.alpha = randomRange(0.2, 0.4);
    this.position.set(x, randomRange(y - 100, y + 200));
    this.scale.set(randomRange(0.8, 1.2), randomRange(0.7, 1.4));
    tween({
      from: 0,
      to: y + offset,
      duration: randomRange(2000, 4000),
      ease: easing.backOut,
      flip: Infinity
    }).start(v => (this.position.y = v));
  }
}
