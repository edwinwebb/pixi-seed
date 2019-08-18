import { Container, Sprite } from 'pixi.js';
import Store from '../../stores/Store';
import SOFT from './soft.jpg';
import DIAGNOSTIC from './diagnostic.png';

export default class Background extends Container {
  constructor() {
    super();
    this.bg = null;
    this.refresh = this.refresh.bind(this);
    this.scaleToWindow = this.scaleToWindow.bind(this);
    window.addEventListener('resize', this.scaleToWindow);
    Store.subscribe(this.refresh);
    this.refresh();
  }
  refresh() {
    if (this.bg) {
      this.removeChild(this.bg);
    }
    const bgAsset = Store.getState().App.diagnostic ? DIAGNOSTIC : SOFT;
    this.bg = Sprite.from(bgAsset);
    this.addChild(this.bg);
    this.scaleToWindow();
  }
  scaleToWindow() {
    this.bg.x = 0;
    this.bg.y = 0;
    this.bg.width = window.innerWidth;
    this.bg.height = window.innerHeight;
  }
}
