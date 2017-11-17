const NEU = 'seed/animation/NEU';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case NEU:
        return {
          ...state
        }
      break;
    default:
        return state;
      break;
  }
}

export const neu = () => ({type: NEU});