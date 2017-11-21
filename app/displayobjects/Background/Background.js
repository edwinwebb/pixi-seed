import { Container, Sprite } from 'pixi.js';
import SOFT from './soft.jpg';

/**
 * Loads the adds the diagnostic image
 *
 * @exports Background
 * @extends Container
 */
export default class Background extends Container {
  constructor() {
    super();

    const bg = Sprite.fromImage(SOFT);

    this.addChild(bg);
  }
}
