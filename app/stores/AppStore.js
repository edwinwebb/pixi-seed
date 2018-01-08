const FILTER_COLOR = 'seed/animation/FILTER_COLOR';
const FILTER_ON = 'seed/animation/FILTER_ON';

export default (
  state = {
    color: 0x9c0a3c,
    coloron: false
  },
  action = {}
) => {
  switch (action.type) {
    case FILTER_COLOR:
      return {
        ...state,
        color: parseInt(action.value.replace('#', '0x'))
      };
    case FILTER_ON:
      return {
        ...state,
        coloron: action.value
      };
    default:
      return state;
  }
};

export const updateFilterColor = value => ({ type: FILTER_COLOR, value });
export const updateFilterIsOn = value => ({ type: FILTER_ON, value });
