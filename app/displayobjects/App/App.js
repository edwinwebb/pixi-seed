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
    const { height, stageCenter } = Store.getState().Renderer;
    const { x, y } = stageCenter;
    const cx = x;
    const cy = y;

    //let group1 = new BunnyGroup();
    let b1 = new Bunny();

    console.log(x, y)

    b1.position.x =1920/2;
    b1.position.y = cy;

    // group1.position.x = cx;
    // group1.position.y = cy + (height*.25);

    this.addChild(b1);
    //this.addChild(group1);
  }

}
