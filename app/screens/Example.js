import { Container } from 'pixi.js';
import Store from '../stores/Store';
import Logo from '../displayobjects/Logo/Logo';
import Background from '../displayobjects/Background/Background.js';

/**
 * Main App Display Object
 *
 * Adds a background and some spinning bunnies
 *
 * @exports Example
 * @extends Container
 */
export default class App extends Container {
  constructor(...args) {
    var bg = new Background();

    super(...args);

    this.logo = new Logo();
    this.addChild(bg, this.logo);
    this.addBunnies();
  }

  addBunnies() {
    const { canvasCenter } = Store.getState().Renderer;
    const { x, y } = canvasCenter;

    this.logo.position.set(x, y);
  }
}
