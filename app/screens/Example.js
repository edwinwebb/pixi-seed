import { Container } from 'pixi.js';
import Background from '../displayobjects/Background/Background.js';

/**
 * Main Display Object
 *
 * @exports Example
 * @extends Container
 */
export default class Example extends Container {
  constructor(...args) {
    super(...args);
    var bg = new Background();
    this.addChild(bg);
  }
}
