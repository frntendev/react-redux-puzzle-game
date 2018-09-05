import React from "react";
import PropTypes from "prop-types";
import { css } from "react-emotion";

const styles = props => ({
  container: css`
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${props.levelStatus === "win"
      ? "#768f65ba"
      : props.levelStatus === "over"
        ? "#8f6565ba"
        : "#8f7965ba"};
    display: grid;
    grid-gap: 20px;
    justify-items: center;
    align-content: center;
    border-radius: 6px;
    color: #473b31;
    font-size: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    z-index: 2;
    label: display-status-container;
  `,
  select: css`
    border: none;
    margin-left: 10px;
    height: 35px;
    width: 150px;
    border-radius: 3px;
    margin-top: -1px;
    background: #473b31;
    color: #fff;
    font-size: 0.8rem;
    text-transform: unset;
    font-weight: bold;
    outline: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    padding-left: 20px;
    cursor: pointer;
    label: level-select;
  `,
  text: css`
    text-align: center;
    line-height: 35px;
  `
});
const renderOptions = number => {
  let opt = [];
  for (let i = 1; i <= number; i++) {
    opt.push(
      <option key={`option-${i}`} value={i}>
        Level {i}
      </option>
    );
  }
  return opt;
};
class DisplayLevelStatus extends React.Component {
  handleLevelSelectChange = event => {
    this.props.startTimer();
    this.props.buildNewGame(event.target.value);
  };

  render() {
    const props = this.props;
    const style = styles(props);
    return (
      props.levelStatus !== "keep" &&
      props.levelStatus !== "new" && (
        <div className={style.container}>
          <span className={style.text}>
            {props.levelStatus === "over" && <div>You Lost</div>}
            {props.levelStatus === "win" && (
              <div>Congratulations! You Won!</div>
            )}
            You can Click on
            {props.levelStatus === "win" || props.levelNumber > 1
              ? " Start "
              : " New Game "}
          </span>
          {props.levelNumber > 1 && [
            <span key="or">OR</span>,
            <span key="level-select">
              <select
                onChange={this.handleLevelSelectChange}
                className={style.select}
              >
                <option>Choose Level</option>
                {renderOptions(props.levelNumber)}
              </select>
            </span>
          ]}
        </div>
      )
    );
  }
}

export default DisplayLevelStatus;

DisplayLevelStatus.defaultProps = {
  levelStatus: "init"
};

DisplayLevelStatus.protoTypes = {
  levelStatus: PropTypes.oneOf(["init", "new", "keep", "win", "over"])
    .isRequired,
  levelNumber: PropTypes.number,
  startTimer: PropTypes.func,
  buildNewGame: PropTypes.func
};
