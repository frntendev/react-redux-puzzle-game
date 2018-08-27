import _ from "lodash";
import { createSelector } from "reselect";

const getCurrentLevel = state => state.levelInfo.currentLevel;
const selectedCells = state => state.levelInfo.selectedCells;

export const getClickedLeft = createSelector(
  [getCurrentLevel, selectedCells],
  (currentLevel, selectedCells) => {
    const levelsArr = currentLevel.map(item => item.number);
    const diff = _.difference(levelsArr, selectedCells).length;
    return diff;
  }
);
