import { WebGLRenderer } from "pixi.js";
import Store from "../stores/Store";

/**
 * GL Renderer with hooks into a Store
 *
 * Manages main animation loop
 *
 * @exports Renderer
 * @extends WebGLRenderer
 */
export default class Renderer extends WebGLRenderer {
  renderables = new Set(); // TODO: Think about that

  constructor(options) {
    super(options);

    window.addEventListener("resize", this.resizeHandler.bind(this));

    this.resizeHandler();
  }

  /**
   * Dispatch resize
   * @return {null}
   */
  resizeHandler() {
    Store.dispatch({ type: "RENDERER.RESIZE" });
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
    this.renderRenderables();

    if (this.active) {
      window.requestAnimationFrame(this.animate.bind(this));
      Store.dispatch({ type: "ANIMATION.TICK" });
    }
  }

  /**
   * Add a renderable object to the animation loop
   * @param {renderable} renderable object
   * @returns {renderable}
   */
  addRenderable(renderable) {
    return this.renderables.add(renderable);
  }

  /**
   * Remove a renderable object from the animation loop
   * @param {renderable} renderable object
   * @returns {renderable}
   */
  removeRenderable(renderable) {
    const hasRenderable = this.renderables.has(renderable);

    if (hasRenderable) {
      this.renderables.delete(renderable);
    }

    return hasRenderable;
  }

  /**
   * Loop over renderables and call the render function on them
   * @return {null}
   */
  renderRenderables() {
    this.renderables.forEach(entry => {
      this.render(entry);
    });
  }
}
