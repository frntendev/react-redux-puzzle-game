export const CHANGE_ITEM_STATUS = "CHANGE_ITEM_STATUS";
export const CHANGE_LEVEL_STATUS = "CHANGE_LEVEL_STATUS";
export const LEVEL_GENERATE = "LEVEL_GENERATE";
export const CHANGE_SELECTED_CELLS = "CHANGE_SELECTED_CELLS";
export const RESTART_LEVEL_INFO_AND_ITEMS = "RESTART_LEVEL_INFO_AND_ITEMS";
export const RESET_ITEMS = "RESET_ITEMS";
export const CHANGE_TIMER = "CHANGE_TIMER";
export const INCREMENT_TIMER = "INCREMENT_TIMER";
export const CHANGE_LEVEL_NUMBER = "CHANGE_LEVEL_NUMBER";
export const CHANGE_USER_LIVES = "CHANGE_USER_LIVES";
export const INITIAL_LEVEL_STATE = {
  levelNumber: 1,
  lives: 0,
  timer: 0,
  currentLevel: [],
  selectedCells: [],
  levelStatus: "init"
};
