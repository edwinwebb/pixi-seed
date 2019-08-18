const TOGGLE_DIAGNOSTIC = 'seed/TOGGLE_DIAGNOSTIC';

export default (
  state = {
    diagnostic: false
  },
  action = {}
) => {
  switch (action.type) {
    case TOGGLE_DIAGNOSTIC:
      return {
        ...state,
        diagnostic: !state.diagnostic
      };
    default:
      return state;
  }
};

export const toggleDiagnostic = _ => ({ type: TOGGLE_DIAGNOSTIC });
