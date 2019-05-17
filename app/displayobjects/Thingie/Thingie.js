/**
 * A small shape
 *
 * @exports Thingie
 * @extends Sprite
 */

import { Sprite, Texture, Point } from 'pixi.js';
import ONE from './1.png';
import TWO from './2.png';
import FOUR from './4.png';
import FIVE from './5.png';

const assets = [ONE, TWO, FOUR, FIVE];

export default class Thingie extends Sprite {
  constructor() {
    const asset = assets[Math.floor(Math.random() * assets.length)];
    const texture = Texture.from(asset);
    super(texture);
    this.speed = Math.random() / 2 + 0.25;
    this.offset = new Point(0, 0);
    this.targetOffset = new Point(0, 0);
    this.originPosition = new Point(0, 0);
    this.alpha = 0.9;
  }

  setInitialPoint(x, y) {
    this.position.set(x, y);
    this.originPosition.set(x, y);
  }

  update(mousepos) {
    const { x, y } = mousepos;
    const x1 = this.originPosition.x;
    const y1 = this.originPosition.y;
    const xDist = x1 - x;
    const yDist = y1 - y;
    const dist = Math.sqrt(xDist * xDist + yDist * yDist);
    if (dist < 200) {
      const angle = Math.atan2(yDist, xDist);
      const xaDist = Math.cos(angle) * dist;
      const yaDist = Math.sin(angle) * dist;
      this.targetOffset.set(xaDist, yaDist);
    } else {
      this.targetOffset.set(0, 0);
    }
    this.offset.x += (this.targetOffset.x - this.offset.x) * 0.01;
    this.offset.y += (this.targetOffset.y - this.offset.y) * 0.01;
    this.position.set(
      this.originPosition.x + this.offset.x,
      this.originPosition.y + this.offset.y
    );
  }
}
