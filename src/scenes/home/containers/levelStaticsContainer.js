import { connect } from "react-redux";
import { startTimer, buildNewGame } from "../../../actions";
import { getClickedLeft } from "../../../selectors";
import Statics from "../components/Statics";

const mapStateToProps = state => ({
  status: state.levelInfo.levelStatus,
  clicks: getClickedLeft(state),
  lives: state.levelInfo.lives,
  timer: state.levelInfo.timer,
  level: state.levelInfo.levelNumber
});

const mapDispatchToProps = dispatch => ({
  startTimer: () => dispatch(startTimer()),
  buildNewGame: level => dispatch(buildNewGame(level))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Statics);
