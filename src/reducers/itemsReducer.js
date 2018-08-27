import * as Actions from "../constants";

const initalGenerator = () => {
  const obj = {};
  for (let i = 1; i <= 100; i++) {
    obj[i] = "default";
  }
  return obj;
};

const initialState = initalGenerator();
export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGE_ITEM_STATUS:
      return {
        ...state,
        [action.payload.id]: action.payload.status
      };
    case Actions.RESTART_LEVEL_INFO_AND_ITEMS:
    case Actions.RESET_ITEMS:
      return initialState;

    default:
      return state;
  }
};
