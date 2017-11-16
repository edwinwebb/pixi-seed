import { Container, Sprite, BLEND_MODES } from "pixi.js";
import TEXTURE from "./diagnostic.png";
import MILLET from "./millet.jpg";

/**
 * Loads the adds the diagnostic image
 *
 * @exports Background
 * @extends Container
 */
export default class Background extends Container {
  constructor() {
    super();

    const bg = Sprite.fromImage(TEXTURE);
    const seeds = Sprite.fromImage(MILLET);

    seeds.alpha = 0.3;
    seeds.blendMode = BLEND_MODES.MULTIPLY;

    this.addChild(bg, seeds);
  }
}
