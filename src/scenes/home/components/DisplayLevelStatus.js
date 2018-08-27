import React from "react";
import PropTypes from "prop-types";
import { css } from "react-emotion";

const styles = props => ({
  container: css`
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${props.status === "win"
      ? "#768f65ba"
      : props.status === "over"
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
const DisplayLevelStatus = props => {
  const style = styles(props);
  return (
    props.status !== "keep" &&
    props.status !== "new" && (
      <div className={style.container}>
        <span className={style.text}>
          {props.status === "over" && <div>You Lost</div>}
          {props.status === "win" && <div>Congratulations! You Won!</div>}
          You can Click on
          {props.status === "win" || props.level > 1 ? " Start " : " New Game "}
        </span>
        {props.level > 1 && [
          <span key="or">OR</span>,
          <span key="level-select">
            <select onChange={props.onLevelChange} className={style.select}>
              <option>Choose Level</option>
              {renderOptions(props.level)}
            </select>
          </span>
        ]}
      </div>
    )
  );
};

export default DisplayLevelStatus;

DisplayLevelStatus.defaultProps = {
  status: "init"
};

DisplayLevelStatus.protoTypes = {
  status: PropTypes.oneOf(["init", "new", "keep", "win", "over"]).isRequired,
  level: PropTypes.number,
  onLevelChange: PropTypes.func
};
