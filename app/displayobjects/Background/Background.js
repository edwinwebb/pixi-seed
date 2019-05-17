import { Sprite } from 'pixi.js';
import SOFT from './soft.jpg';
import ScaledContainer from '../ScaledContainer/ScaledContainer';

/**
 * Loads the adds the diagnostic image
 *
 * @exports Background
 * @extends ScaledContainer
 */
export default class Background extends ScaledContainer {
  constructor() {
    super();

    const bg = Sprite.from(SOFT);

    this.addChild(bg);
  }
}
