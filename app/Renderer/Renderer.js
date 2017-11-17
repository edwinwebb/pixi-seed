import { WebGLRenderer } from 'pixi.js';
import Store, { AnimationStore } from '../stores/Store';
import {tick} from '../stores/AnimationStore';
import {resize} from '../stores/RendererStore';

/**
 * GL Renderer with hooks into a Store
 *
 * Manages main animation loop
 *
 * @exports Renderer
 * @extends WebGLRenderer
 */
export default class Renderer extends WebGLRenderer {

  constructor(options) {

    super(options);

    window.addEventListener('resize', this.resizeHandler.bind(this));

    this.resizeHandler();
  }

  /**
   * Dispatch resize
   * @return {null}
   */
  resizeHandler() {
    Store.dispatch(resize());
    this.resize(window.innerWidth, window.innerHeight);
  }

  /**
   * Start the animation loop
   * @return {null}
   */
  start() {
    this.active = true;
    window.requestAnimationFrame(this.animate.bind(this));
  }

  /**
   * Stop the animation loop
   * @return {null}
   */
  stop() {
    this.active = false;
  }

  /**
   * Main animation loop, updates animation store
   * @return {null}
   */
  animate() {
    if(this.active) {
      window.requestAnimationFrame(this.animate.bind(this));
      AnimationStore.dispatch(tick());
    }
  }

}
