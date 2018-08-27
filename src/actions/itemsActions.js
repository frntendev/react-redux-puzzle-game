import * as Actions from "../constants";
import _ from "lodash";
import {
  levelGenrator,
  changeLevelStatus,
  changeItemStatus,
  changeSelectedCells,
  checkValidItem
} from "./levelActions";
import { aroundCellGenerator } from "../helpers/buildLevels";

export const updateBoard = (id, levelStatus, level) => (dispatch, getState) => {
  if (levelStatus === "new") {
    dispatch(updateNewGame(id, level));
  }
  dispatch(changeSelectedCells(id));
  dispatch(updatePuzzleCells(id));
  dispatch(checkValidItem(id));
};

export const updatePuzzleCells = id => (dispatch, getState) => {
  const state = getState();
  const currentLevel = state.levelInfo.currentLevel.map(item => item.number);
  const selectedCells = state.levelInfo.selectedCells;
  const aroundCell = aroundCellGenerator(id).map(item => item.number);
  dispatch(changeCellsStatuses(currentLevel, "hint"));
  dispatch(changeItemStatus(id, "selected"));
  dispatch(changeCellsStatuses(selectedCells, "selected"));
  const possibleCells = _.difference(
    _.intersection(currentLevel, aroundCell),
    selectedCells
  );
  dispatch(changeCellsStatuses(possibleCells, "possible"));
};

export const updateNewGame = (id, level) => dispatch => {
  dispatch(levelGenrator(id, level));
  dispatch(changeLevelStatus("keep"));
};

export const changeCellsStatuses = (array, status) => dispatch => {
  array.map(item => {
    return dispatch(changeItemStatus(item, status));
  });
};

export const resetItems = () => dispatch => {
  dispatch({
    type: Actions.RESET_ITEMS
  });
};
