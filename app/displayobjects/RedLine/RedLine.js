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
import { easeInOut, animate } from 'popmotion';

export default class RedLine extends Sprite {
  constructor(x, y) {
    const texture = Texture.from(LINE);
    super(texture);
    const offset = randomRange(-500, 500);
    this.alpha = randomRange(0.2, 0.4);
    this.position.set(x, randomRange(y - 100, y + 200));
    this.scale.set(randomRange(0.8, 1.2), randomRange(0.7, 1.4));
    animate({
      from: this.y,
      to: y + offset,
      duration: randomRange(200000, 400000),
      ease: easeInOut,
      flip: Infinity,
    });
  }
}
