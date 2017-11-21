import { Filter, utils } from 'pixi.js';
import VERT from './color.vert';
import FRAG from './color.frag';

export default class ColorFilter extends Filter {
  constructor(color = 0xff00ff) {
    super(VERT, FRAG);
    this.color = color;
  }

  set color(color) {
    if (typeof color === 'number') {
      this.uniforms.color = utils.hex2rgb(color);
    }
  }
}
