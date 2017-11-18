// template : https://github.com/erikras/ducks-modular-redux

import { canvasWidth, canvasHeight } from '../constants/AppConstants';

const windowSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
  resolution: window.devicePixelRatio,
  stageCenter: { x: window.innerWidth / 2, y: window.innerHeight / 2 }
});

const defaultState = {
  canvasHeight,
  canvasWidth,
  canvasCenter: {
    x: canvasWidth / 2,
    y: canvasHeight / 2
  },
  ...windowSize()
};

const RESIZE = 'seed/animation/TICK';

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case RESIZE:
      return {
        ...state,
        ...windowSize()
      };
    default:
      return state;
  }
};

export const resize = () => ({ type: RESIZE });
