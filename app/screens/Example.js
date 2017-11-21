import { Container } from 'pixi.js';
import Store from '../stores/Store';
import { AnimationStore } from '../stores/Store';
import Logo from '../displayobjects/Logo/Logo';
import Background from '../displayobjects/Background/Background.js';
import Thingie from '../displayobjects/Thingie/Thingie';

const isNear = (p1, p2) => {
  const a = p1.x - p2.x;
  const b = p1.y - p2.y;
  const c = Math.sqrt(a * a + b * b);
  return c < 100;
};

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
    this.addChild(bg);
    this.addBunnies();
    const test = new Thingie();
    this.addChild(test);
    test.position.set(500, 500);
    this.addThingies();
    this.addChild(this.logo);
  }

  addBunnies() {
    const { canvasCenter } = Store.getState().Renderer;
    const { x, y } = canvasCenter;

    this.logo.position.set(x, y);
  }

  addThingies() {
    this.thingies = [];
    for (let index = 0; index < 100; index++) {
      const t = new Thingie();
      t.position.set(1920 * Math.random(), 1380 * Math.random() - 300);
      const far =
        this.thingies.findIndex(t2 => isNear(t.position, t2.position)) === -1;
      if (far) {
        this.thingies.push(t);
        this.addChild(t);
      }
    }

    AnimationStore.subscribe(() => {
      this.thingies.forEach(t => t.update());
    });
  }
}
