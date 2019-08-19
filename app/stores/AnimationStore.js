// template : https://github.com/erikras/ducks-modular-redux

const TICK = 'seed/animation/TICK';

import game from '../engine/Game';

const defaultState = {
  tick: 1,
  previousTick: 0,
  startTime: window.performance.now(),
  currentTime: window.performance.now(),
  gameState: game.getState()
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case TICK:
      game.process();
      return {
        ...state,
        tick: state.tick + 1,
        previousTick: state.tick,
        currentTime: window.performance.now(),
        gameState: game.getState()
      };
    default:
      return state;
  }
};

export const tick = () => ({ type: TICK });
