import { Container } from 'pixi.js';
import Background from '../displayobjects/Background/Background.js';
import Court from '../displayobjects/Court/Court.js';

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
    var court = new Court();
    this.addChild(bg);
    this.addChild(court);
  }
}
