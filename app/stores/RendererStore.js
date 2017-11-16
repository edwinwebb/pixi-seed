import { canvasWidth, canvasHeight } from "../constants/AppConstants";

const windowSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
  resolution: window.devicePixelRatio,
  stageCenter: { x: window.innerWidth / 2, y: window.innerHeight / 2 }
});

const initialState = {
  canvasHeight,
  canvasWidth,
  canvasCenter: {
    x: canvasWidth / 2,
    y: canvasHeight / 2
  },
  ...windowSize()
};

export const RESIZE = "RENDERER.RESIZE";

export default (state = initialState, action = {}) => {
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
