// template : https://github.com/erikras/ducks-modular-redux

const TICK = 'seed/animation/TICK';
const UPDATE_GAME = 'seed/animation/UPDATE_GAME';

const defaultState = {
  tick: 1,
  previousTick: 0,
  startTime: window.performance.now(),
  currentTime: window.performance.now()
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case TICK:
      return {
        ...state,
        tick: state.tick + 1,
        previousTick: state.tick,
        currentTime: window.performance.now()
      };
    case UPDATE_GAME:
      return {
        ...state,
        tick: state.tick + 1,
        previousTick: state.tick,
        currentTime: window.performance.now(),
        gameState: action.gameState
      };
    default:
      return state;
  }
};

export const tick = _ => ({ type: TICK });
export const updateGame = gameState => ({ type: UPDATE_GAME, gameState });
