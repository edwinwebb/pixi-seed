const defaultState = {
  tick: 0,
  startTime: window.performance.now(),
  currentTime: window.performance.now()
}

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'ANIMATION.TICK':
        return {
          ...state,
          tick: state.tick + 1,
          currentTime: window.performance.now()
        }
      break;
    default:
        return state;
      break;
  }
}