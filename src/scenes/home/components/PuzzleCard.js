import React from "react";
import PropTypes from "prop-types";
import { css } from "react-emotion";

const styles = props => ({
  root: css`
    border-radius: 3px;
    background-color: ${color[props.status]};
    animation: zoomIn 0.5s ease-out;
    transition: 0.3s background-color ease;
    pointer-events: ${props.status !== "possible" && props.disabled && "none"};
    cursor: pointer;
    @media (max-width: 460px) {
      border-radius: 0;
    }
    @keyframes zoomIn {
      from {
        transform: scale(0);
      }
      to {
        transform: scale(1);
      }
    }
    label: puzzle-item;
  `
});

const color = {
  default: "#eee4da59",
  selected: "#F67C5F",
  hint: "#EEE4DA",
  possible: "#F2B179"
};

const PuzzleCard = props => {
  const style = styles(props);
  return <div onClick={props.onClick} className={style.root} />;
};

export default PuzzleCard;

PuzzleCard.defaultProps = {
  status: "default"
};

PuzzleCard.propTypes = {
  status: PropTypes.oneOf(["default", "selected", "hint", "possible"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};
