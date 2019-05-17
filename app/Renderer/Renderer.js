import { Renderer } from 'pixi.js';
import Store, { AnimationStore } from '../stores/Store';
import { tick } from '../stores/AnimationStore';
import { resize } from '../stores/RendererStore';

/**
 * GL Renderer with hooks into a Store
 *
 * Manages main animation loop
 *
 * @exports AnimatedRenderer
 * @extends Renderer
 */
export default class AnimatedRenderer extends Renderer {
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
    if (this.active) {
      window.requestAnimationFrame(this.animate.bind(this));
      AnimationStore.dispatch(tick());
    }
  }
}
