import { Container, Point } from 'pixi.js';
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

    const logo = new Logo();
    this.addChild(bg);
    this.addThingies();
    this.addChild(logo);
    this.mousepos = new Point(500, 500);
  }

  addThingies() {
    this.thingies = [];
    for (let index = 0; index < 500; index++) {
      const t = new Thingie();
      t.setInitialPoint(1920 * Math.random(), 1380 * Math.random() - 300);
      const far =
        this.thingies.findIndex(t2 => isNear(t.position, t2.position)) === -1;
      if (far) {
        this.thingies.push(t);
        this.addChild(t);
      }
    }

    AnimationStore.subscribe(() => {
      this.thingies.forEach(t => t.update(this.mousepos));
    });

    this.interactive = true;
  }

  mousemove(e) {
    this.mousepos = e.data.global;
  }
}
