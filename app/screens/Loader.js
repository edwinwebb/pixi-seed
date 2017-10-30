import { Container, Text } from 'pixi.js';

/**
 * Loading Screen
 *
 * @exports Loader
 * @extends ScaledContainer
 */

export default class Loader extends Container {

  constructor(...args) {
    super(...args);
  }

  start() {
    this.onLoaded();
  }

  onLoaded(callback = ()=>{}) {
    callback();
  }

}
