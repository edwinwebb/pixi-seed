/**
 * Pixi Seed Logo
 *
 * @exports Logo
 * @extends Sprite
 */

import { Sprite, Texture } from 'pixi.js';
import LOGO from './logo@2x.png';

export default class Logo extends Sprite {
  constructor() {
    const texture = Texture.fromImage(LOGO);
    super(texture);
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
  }
}
