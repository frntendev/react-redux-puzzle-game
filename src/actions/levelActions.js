import _ from "lodash";
import * as Actions from "../constants";
import { START_TIMER, STOP_TIMER } from "redux-timer-middleware";
import { buildLevels, aroundCellGenerator } from "../helpers/buildLevels";
import { resetItems } from "./itemsActions";

export const buildNewGame = level => dispatch => {
  dispatch(restartLevelInfoAndItems());
  dispatch(changeTimer(0));
  dispatch(changeLevelStatus("new"));
  if (level) dispatch(changeLevelNumber(parseInt(level, 10), false));
};

export const levelGenrator = (cell, level) => dispatch => {
  const levelCells = buildLevels(cell, level, []);
  const levelCellsNumbersArray = levelCells.map(item => item.number);
  dispatch({
    type: Actions.LEVEL_GENERATE,
    payload: levelCells
  });
  levelCellsNumbersArray.map(item => {
    return dispatch(changeItemStatus(item, "hint"));
  });
};

export const checkValidItem = id => (dispatch, getState) => {
  const state = getState();
  const selectedCells = state.levelInfo.selectedCells;
  const currentLevel = state.levelInfo.currentLevel.map(item => item.number);
  const aroundCells = aroundCellGenerator(id).map(item => item.number);
  const possibleCells = _.difference(
    _.intersection(currentLevel, aroundCells),
    selectedCells
  );
  if (possibleCells.length > 0) {
    return dispatch(changeLevelStatus("keep"));
  } else {
    dispatch(stopTimer());
    dispatch(resetItems());
    if (
      selectedCells.length === currentLevel.length &&
      _.difference(selectedCells, currentLevel).length === 0
    ) {
      return dispatch(changeLevelStatus("win"));
    } else {
      return dispatch(changeLevelStatus("over"));
    }
  }
};

export const changeLevelStatus = value => dispatch => {
  dispatch({
    type: Actions.CHANGE_LEVEL_STATUS,
    payload: value
  });
  return dispatch(checkGameIsOver(value));
};

export const checkGameIsOver = value => (dispatch, getState) => {
  const state = getState();
  const currentLives = state.levelInfo.lives;
  const currentLevelNumber = state.levelInfo.levelNumber;
  const currentLevel = state.levelInfo.currentLevel.map(item => item.number);
  const selectedItems = state.levelInfo.selectedCells;
  const diff = _.difference(currentLevel, selectedItems).length;
  switch (value) {
    case "win":
      const shouldLocalLevelUpdate =
        currentLevelNumber + 1 >
          parseInt(localStorage.getItem("levelNumber"), 10) ||
        !localStorage.getItem("levelNumber");
      dispatch(
        changeLevelNumber(currentLevelNumber + 1, shouldLocalLevelUpdate)
      );
      dispatch(changeUserLives(currentLives + 1));
      break;
    case "over":
      dispatch(
        changeUserLives(currentLives - diff <= 0 ? 0 : currentLives - diff)
      );
      if (getState().levelInfo.lives === 0) dispatch(changeLevelNumber(1));
      break;
    default:
      break;
  }
};

export const changeSelectedCells = cell => dispatch => {
  dispatch({
    type: Actions.CHANGE_SELECTED_CELLS,
    payload: cell
  });
};

export const changeItemStatus = (id, status) => dispatch => {
  dispatch({
    type: Actions.CHANGE_ITEM_STATUS,
    payload: {
      id,
      status
    }
  });
};

export const restartLevelInfoAndItems = () => dispatch => {
  dispatch({
    type: Actions.RESTART_LEVEL_INFO_AND_ITEMS
  });
};

export const changeLevelNumber = (level, changeLocal = true) => dispatch => {
  if (changeLocal) localStorage.setItem("levelNumber", level);
  dispatch({
    type: Actions.CHANGE_LEVEL_NUMBER,
    payload: level
  });
};

export const changeUserLives = life => dispatch => {
  localStorage.setItem("lives", life);
  dispatch({
    type: Actions.CHANGE_USER_LIVES,
    payload: life
  });
};

export const changeTimer = num => dispatch => {
  dispatch({
    type: Actions.CHANGE_TIMER,
    payload: num
  });
};

export const startTimer = () => (dispatch, getState) => {
  dispatch({
    type: START_TIMER,
    payload: {
      actionName: "INCREMENT_TIMER",
      timerName: "infiniteTimer"
    }
  });
};

export const stopTimer = () => dispatch => {
  dispatch({
    type: STOP_TIMER,
    payload: {
      timerName: "infiniteTimer"
    }
  });
};
