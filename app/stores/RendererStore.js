const windowSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
  resolution: window.devicePixelRatio,
  stageCenter: {x: window.innerWidth / 2, y: window.innerHeight / 2}
});

const defaultState = {
  ...windowSize()
};

export const RESIZE = 'RENDERER.RESIZE';

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case RESIZE:
        return {
          ...state,
          ...windowSize()
        }
      break;
    default:
        return state;
      break;
  }
}