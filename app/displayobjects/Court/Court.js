import { Container, Sprite } from 'pixi.js';
import COURT from './court.png';

export default class Court extends Container {
  constructor() {
    super();
    this.court = Sprite.from(COURT);
    this.addChild(this.court);
    this.reposition = this.reposition.bind(this);
    window.addEventListener('resize', this.reposition);
    this.reposition();
  }
  reposition() {
    this.x = (window.innerWidth - this.width) / 2;
    this.y = (window.innerHeight - this.height) / 2;
  }
}
