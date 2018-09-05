import { connect } from "react-redux";
import { startTimer, buildNewGame } from "../../../actions";
import DisplayLevelStatus from "../components/DisplayLevelStatus";

const mapStateToProps = state => ({
  levelStatus: state.levelInfo.levelStatus,
  levelNumber: state.levelInfo.levelNumber
});

const mapDispatchToProps = dispatch => ({
  startTimer: () => dispatch(startTimer()),
  buildNewGame: level => dispatch(buildNewGame(level))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayLevelStatus);
