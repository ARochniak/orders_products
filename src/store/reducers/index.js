import * as types from '../types';

export default (state, action) => {
  switch (action.type) {
    case types.SET_ACTIVE_ORDER: {
      return {
        ...state,
        activeOrder: action.order
      };
    }
    case types.CLOSE_ACTIVE_ORDER: {
      return {
        ...state,
        activeOrder: null
      };
    }
    case types.REMOVE_ORDER: {
      return action.state;
    }

    default:
      return state;
  }
};
