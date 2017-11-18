import { Filter } from 'pixi.js';
import VERT from './color.vert';
import FRAG from './color.frag';

export default class ColorFilter extends Filter {
  constructor() {
    super(VERT, FRAG);
  }
}
