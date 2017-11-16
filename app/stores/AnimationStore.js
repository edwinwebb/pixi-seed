const defaultState = {
  tick: 1,
  previousTick: 0,
  startTime: window.performance.now(),
  currentTime: window.performance.now()
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "ANIMATION.TICK":
      return {
        ...state,
        tick: state.tick + 1,
        previousTick: state.tick,
        currentTime: window.performance.now()
      };
    default:
      return state;
  }
};
