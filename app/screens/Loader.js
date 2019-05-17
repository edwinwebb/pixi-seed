import { Graphics, Loader } from 'pixi.js';
import { AnimationStore } from '../stores/Store';
import Store from '../stores/Store';
import ScaledContainer from '../displayobjects/ScaledContainer/ScaledContainer';

/**
 * Loading Screen
 *
 * @exports LoaderScreen
 * @extends ScaledContainer
 */

export default class LoaderScreen extends ScaledContainer {
  constructor() {
    const { canvasWidth, canvasHeight } = Store.getState().Renderer;

    super();

    this.loader = new Loader();
    this.done = () => {};

    // set up a bar
    this.bar = new Graphics().beginFill(0xff0000).drawRect(0, -2.5, 200, 5);
    this.bar.x = canvasWidth / 2 - 100;
    this.bar.y = canvasHeight / 2;
    this.bar.scale.x = 0;
    this.progress = 0;
    this.ease = 0;

    // animate it
    this.unsubscribe = AnimationStore.subscribe(() => {
      this.ease += (this.progress - this.ease) * 0.03;
      this.bar.scale.x = this.ease;
    });

    this.addChild(this.bar);
  }

  start(assets = []) {
    this.loader.add(assets);
    this.loader.load();
    this.loader.onProgress.add(this.onUpdate.bind(this));
    this.loader.onComplete.add(this.onComplete.bind(this));
  }

  onUpdate(ldr) {
    this.progress = ldr.progress / 100;
  }

  onComplete() {
    this.done();
    this.unsubscribe();
  }

  onLoaded(callback = () => {}) {
    this.done = callback;
  }
}
