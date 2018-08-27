import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  updateBoard,
  levelGenrator,
  changeSelectedCells,
  changeLevelNumber,
  changeLevelStatus,
  buildNewGame,
  startTimer,
  stopTimer,
  changeUserLives
} from "../../../actions";
import HomePage from "../components/HomePage";
import { getClickedLeft } from "../../../selectors";

const mapStateToProps = state => ({
  items: Object.values(state.items),
  levelInfo: state.levelInfo,
  clickedLeft: getClickedLeft(state),
  selectedCells: state.levelInfo.selectedCells
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateBoard,
      levelGenrator,
      changeSelectedCells,
      changeLevelStatus,
      buildNewGame,
      startTimer,
      stopTimer,
      changeLevelNumber,
      changeUserLives
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
