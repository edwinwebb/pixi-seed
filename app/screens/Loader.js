import { Container, loader } from 'pixi.js';

/**
 * Loading Screen
 *
 * @exports LoaderScreen
 * @extends ScaledContainer
 */

export default class LoaderScreen extends Container {

  constructor() {
    super();
    this.loader = loader;
    this.done = ()=>{}
  }

  start(assets = []) {
    loader.add(assets);
    loader.load();
    loader.onProgress.add(this.onUpdate.bind(this));
    loader.onComplete.add(this.onComplete.bind(this));
  }

  onUpdate(ldr) {
    console.log(ldr.progress)
  }

  onComplete() {
    this.done();
  }

  onLoaded(callback = ()=>{}) {
    this.done = callback;
  }

}
