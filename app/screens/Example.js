import { Container, Point } from 'pixi.js';
import { canvasWidth, canvasHeight } from '../constants/AppConstants';
import { AnimationStore } from '../stores/Store';
import Logo from '../displayobjects/Logo/Logo';
import Background from '../displayobjects/Background/Background.js';
import Thingie from '../displayobjects/Thingie/Thingie';
import RedLine from '../displayobjects/RedLine/RedLine';

const isNear = (p1, p2) => {
  const a = p1.x - p2.x;
  const b = p1.y - p2.y;
  const c = Math.sqrt(a * a + b * b);
  return c < 100;
};

/**
 * Main Display Object
 *
 * @exports Example
 * @extends Container
 */
export default class Example extends Container {
  constructor(...args) {
    var bg = new Background();

    super(...args);

    const logo = new Logo();
    this.addChild(bg);
    this.addLines();
    this.addThingies();
    this.addChild(logo);
    this.mousepos = new Point(500, 500);
  }

  addThingies() {
    this.thingies = [];
    for (let index = 0; index < 200; index++) {
      const t = new Thingie();
      t.setInitialPoint(
        canvasWidth * Math.random(),
        (canvasHeight + 300) * Math.random() - 300
      );
      const near = this.thingies.some(t2 => isNear(t.position, t2.position));
      if (!near) {
        this.thingies.push(t);
        this.addChild(t);
      }
    }

    AnimationStore.subscribe(() => {
      this.thingies.forEach(t => t.update(this.mousepos));
    });

    this.interactive = true;
  }

  addLines() {
    const count = 100;
    for (let index = 0; index < count; index++) {
      const y = Math.sin(index * 2) * canvasHeight - 500;
      const step = canvasWidth / count * index;
      const l = new RedLine(step, y);
      this.addChild(l);
    }
  }

  mousemove(e) {
    const { x, y } = e.data.global;
    if (this.mousepos.x !== x && this.mousepos.y !== y) {
      this.mousepos.set(x, y);
    }
  }
}
