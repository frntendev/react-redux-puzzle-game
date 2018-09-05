import { connect } from "react-redux";
import {
  updateBoard,
  changeSelectedCells,
  changeLevelNumber,
  changeUserLives
} from "../../../actions";
import HomePage from "../components/HomePage";

const mapStateToProps = state => ({
  items: Object.values(state.items),
  levelInfo: state.levelInfo
});

const mapDispatchToProps = dispatch => ({
  updateBoard: (id, levelStatus, level) =>
    dispatch(updateBoard(id, levelStatus, level)),
  changeSelectedCells: cell => dispatch(changeSelectedCells(cell)),
  changeLevelNumber: (level, changeLocal) =>
    dispatch(changeLevelNumber(level, changeLocal)),
  changeUserLives: life => dispatch(changeUserLives(life))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
