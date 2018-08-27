import * as Actions from "../constants";

export default (state = Actions.INITIAL_LEVEL_STATE, action) => {
  switch (action.type) {
    case Actions.CHANGE_LEVEL_STATUS:
      return {
        ...state,
        levelStatus: action.payload
      };
    case Actions.LEVEL_GENERATE:
      return {
        ...state,
        currentLevel: action.payload
      };
    case Actions.CHANGE_SELECTED_CELLS:
      const hasValue = state.selectedCells.indexOf(action.payload) > -1;
      if (!hasValue)
        return {
          ...state,
          selectedCells: [...state.selectedCells, action.payload]
        };
      return state;
    case Actions.RESTART_LEVEL_INFO_AND_ITEMS:
      return {
        ...state,
        currentLevel: [],
        selectedCells: [],
        levelStatus: "init"
      };
    case Actions.CHANGE_LEVEL_NUMBER:
      return {
        ...state,
        levelNumber: action.payload
      };
    case Actions.CHANGE_USER_LIVES:
      return {
        ...state,
        lives: action.payload
      };
    case Actions.INCREMENT_TIMER:
      return {
        ...state,
        timer: state.timer + 1
      };
    case Actions.CHANGE_TIMER:
      return {
        ...state,
        timer: action.payload
      };
    default:
      return state;
  }
};
