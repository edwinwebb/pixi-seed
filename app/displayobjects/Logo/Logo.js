/**
 * Pixi Seed Logo
 *
 * @exports Logo
 * @extends Sprite
 */

import { Sprite, Texture } from 'pixi.js';
import LOGO from './logo@2x.png';
import ScaledContainer from '../ScaledContainer/ScaledContainer';

export default class Logo extends ScaledContainer {
  constructor() {
    const texture = Texture.from(LOGO);
    const sprite = new Sprite(texture);
    super();
    this.addChild(sprite);
    sprite.anchor.x = 0.5;
    sprite.anchor.y = 0.5;
    sprite.position.set(1920 / 2, 1080 / 2);
  }
}
