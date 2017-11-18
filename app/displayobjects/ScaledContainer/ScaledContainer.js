import { Container, Point } from 'pixi.js';
import Store from '../../stores/Store';
import { resize } from '../../stores/RendererStore';
import { checkScreen } from '../../utils';

/**
 * ScaledContainer
 *
 * A DisplayObjectContainer which attempts to scale and best-fit into the
 * window size dispatched from the RendererStore
 *
 * @extends Container
 * @exports ScaledContainer
 */
export default class ScaledContainer extends Container {
  /**
   * Set target size
   * @param  {Number} target_w width
   * @param  {number} target_h height
   * @return {null}
   */
  constructor(...args) {
    super(...args);

    this.currentSize = {
      w: 0,
      h: 0
    };

    // TODO : init resize should come from renderer
    this.resizeHandler(
      window.innerWidth,
      window.innerHeight,
      Store.getState().Renderer.canvasWidth,
      Store.getState().Renderer.canvasHeight
    );

    Store.subscribe(() => {
      const {
        width,
        height,
        canvasWidth,
        canvasHeight
      } = Store.getState().Renderer;
      const { w, h } = this.currentSize;
      const needsResize = checkScreen(width, height, w, h);

      if (needsResize) {
        this.resizeHandler(width, height, canvasWidth, canvasHeight);
      }

      this.currentSize = {
        w: width,
        h: height
      };
    });
  }

  /**
   * Scales and positions Container to best-fit to target dimensions
   * @return {null}
   */
  resizeHandler(rw, rh, tw = 1920, th = 1080) {
    const Xratio = rw / tw;
    const Yratio = rh / th;
    let scaleRatio = rw > rh ? Xratio : Yratio;
    let scale = new Point(scaleRatio, scaleRatio);
    let offsetX = rw / 2 - tw * scaleRatio / 2;
    let offsetY = rh / 2 - th * scaleRatio / 2;

    if (th * scaleRatio < rh) {
      scaleRatio = Yratio;
      scale = new Point(scaleRatio, scaleRatio);
      offsetX = rw / 2 - tw * scaleRatio / 2;
      offsetY = rh / 2 - th * scaleRatio / 2;
    }

    this.position.x = offsetX;
    this.position.y = offsetY;
    this.scale = scale;
  }
}
