/**
 * A small shape
 *
 * @exports Thingie
 * @extends Sprite
 */

import { Sprite, Texture } from 'pixi.js';
import ONE from './1.png';
import TWO from './2.png';
import THREE from './3.png';
import FOUR from './4.png';
import FIVE from './5.png';

const assets = [ONE, TWO, FOUR, FIVE];

export default class Thingie extends Sprite {
  constructor() {
    const asset = assets[Math.floor(Math.random() * (assets.length - 1))];
    const texture = Texture.fromImage(asset);
    super(texture);
    this.speed = Math.random() / 2 + 0.25;
  }

  update() {
    this.y += this.speed;
    if (this.y > 1080) {
      this.y = -100;
    }
  }
}
