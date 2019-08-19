import { Container, Sprite } from 'pixi.js';
import COURT from './court.png';
import BALL from './ball.png';
import PADDLE from './paddle.png';
import { AnimationStore } from '../../stores/Store';

export default class Court extends Container {
  constructor() {
    super();
    this.court = Sprite.from(COURT, true);
    this.ball = Sprite.from(BALL, true);
    this.paddle = Sprite.from(PADDLE, true);
    this.addChild(this.court);
    this.addChild(this.ball);
    this.addChild(this.paddle);
    this.reposition = this.reposition.bind(this);
    this.refresh = this.refresh.bind(this);
    window.addEventListener('resize', this.reposition);
    this.reposition();
    AnimationStore.subscribe(this.refresh);
  }
  reposition() {
    this.x = (window.innerWidth - this.width) / 2;
    this.y = (window.innerHeight - this.height) / 2;
  }
  refresh() {
    const { gameState } = AnimationStore.getState();
    this.ball.x = gameState.ballX;
    this.ball.y = gameState.ballY;
    this.paddle.x = gameState.paddleX;
    this.paddle.y = gameState.paddleY;
  }
}
