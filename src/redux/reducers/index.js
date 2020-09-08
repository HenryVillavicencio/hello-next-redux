import { count } from "../actions/actionsTypes";
const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case count.INCREASE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case count.DECREASE:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default reducer;
