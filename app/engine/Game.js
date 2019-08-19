const PADDLE_WIDTH = 24;
const PADDLE_HEIGHT = 99;
const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;
const BALL_RADIUS = 16.5;
const BALL_DIAMETER = BALL_RADIUS * 2;
const PADDLE_X = 60;
const PADDLE_SPEED = 6;
const PADDLE_RIGHT = PADDLE_X + PADDLE_WIDTH;

// Game engine separate from pixi so that it can be remote.

class Game {
  constructor() {
    this.ballX = SCREEN_WIDTH / 2;
    this.ballY = SCREEN_HEIGHT / 2;
    this.ballXdir = 3;
    this.ballYdir = 3;
    this.paddleY = 30;
    this.paddleYdir = 0;
  }
  process() {
    this.ballX += this.ballXdir;
    this.ballY += this.ballYdir;
    if (this.ballX + BALL_DIAMETER > SCREEN_WIDTH) {
      this.ballX = SCREEN_WIDTH - BALL_DIAMETER;
      this.ballXdir = -this.ballXdir;
    }
    if (this.ballY + BALL_DIAMETER > SCREEN_HEIGHT) {
      this.ballY = SCREEN_HEIGHT - BALL_DIAMETER;
      this.ballYdir = -this.ballYdir;
    }
    if (this.ballX < 0) {
      this.ballX = 0;
      this.ballXdir = -this.ballXdir;
    }
    if (this.ballY < 0) {
      this.ballY = 0;
      this.ballYdir = -this.ballYdir;
    }
    this.paddleY += this.paddleYdir;
    if (this.paddleY < 0) {
      this.paddleY = 0;
    }
    if (this.paddleY + PADDLE_HEIGHT > SCREEN_HEIGHT) {
      this.paddleY = SCREEN_HEIGHT - PADDLE_HEIGHT;
    }
    if (this.isIntersecting()) {
      this.ballXdir = -this.ballXdir;
    }
  }
  isIntersecting() {
    const ballLeft = this.ballX;
    const ballRight = ballLeft + BALL_DIAMETER;
    const ballTop = this.ballY;
    const ballBottom = ballTop + BALL_DIAMETER;
    const paddleTop = this.paddleY;
    const paddleBottom = paddleTop + PADDLE_HEIGHT;
    if (
      ballBottom > paddleTop &&
      ballTop < paddleBottom &&
      ballLeft < PADDLE_RIGHT &&
      ballRight > PADDLE_X
    ) {
      return true;
    }
    return false;
  }
  moveUp() {
    this.paddleYdir = -PADDLE_SPEED;
  }
  moveDown() {
    this.paddleYdir = PADDLE_SPEED;
  }
  stopMoving() {
    this.paddleYdir = 0;
  }
  getState() {
    const { ballX, ballY, paddleY } = this;
    return {
      ballX,
      ballY,
      paddleX: PADDLE_X,
      paddleY
    };
  }
}

export default new Game();
