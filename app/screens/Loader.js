import { Container, loader } from 'pixi.js';

/**
 * Loading Screen
 *
 * @exports LoaderScreen
 * @extends ScaledContainer
 */

export default class LoaderScreen extends Container {

  constructor(...args) {
    super(...args);

    this.loader = loader;
  }

  start(assets = []) {
    assets.forEach( (asset) => {
      loader.add(asset);
    });

    loader.load(this.onComplete.bind(this));
    loader.onProgress.add(this.onUpdate.bind(this));
  }

  onUpdate(...args) {
    console.log(args);
  }

  onComplete() {
    this.onLoaded();
  }

  onLoaded(callback = ()=>{}) {
    callback();
  }

}
