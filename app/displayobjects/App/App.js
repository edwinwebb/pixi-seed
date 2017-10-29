import ScaledContainer from '../ScaledContainer/ScaledContainer.js';
import Store from '../../stores/Store';
import BunnyGroup from '../BunnyGroup/BunnyGroup.js';
import Bunny from '../Bunny/Bunny.js';
import Background from '../Background/Background.js';

/**
 * Main App Display Object
 *
 * Adds a background and some bunnies to it's self
 *
 * @exports App
 * @extends ScaledContainer
 */
export default class App extends ScaledContainer {

  constructor(...args) {
    var bg = new Background();

    super(...args);

    this.addChild(bg);
    this.addBunnies();
  }

  addBunnies() {
    const { height, canvasCenter } = Store.getState().Renderer;
    const { x, y } = canvasCenter;
    const group1 = new BunnyGroup();
    const b1 = new Bunny();

    b1.position.x = x;
    b1.position.y = y;

    group1.position.x = x;
    group1.position.y = y + (height*.25);

    this.addChild(b1, group1);
  }

}
