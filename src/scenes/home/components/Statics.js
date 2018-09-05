import React from "react";
import PropTypes from "prop-types";
import { css } from "react-emotion";

const styles = {
  staticContainer: css`
    display: grid;
    grid-template-columns: repeat(4, 80px) auto 150px;
    grid-template-rows: 60px;
    grid-gap: 10px;
    @media (max-width: 640px) {
      grid-template-columns: repeat(5, 1fr);
    }
    label: static-container;
  `,
  staticItem: css`
    display: grid;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    align-items: center;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.8rem;
    background-color: #bbada0;
    border-radius: 3px;
    color: #eee4da;
    label: static-item;
  `,
  staticValue: css`
    color: #fff;
    font-size: 1.2rem;
    label: static-value;
  `,
  newGameBtn: css`
    grid-column: 6;
    background-color: #473b31;
    color: #fff;
    border-radius: 3px;
    outline: none;
    border: none;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.8rem;
    cursor: pointer;
    @media (max-width: 640px) {
      grid-column: 5;
    }
  `
};

class Statics extends React.Component {
  handleNewGameClick = () => {
    this.props.startTimer();
    this.props.buildNewGame();
  };

  render() {
    const props = this.props;
    return (
      <div className={styles.staticContainer}>
        <div className={styles.staticItem}>
          <span>Timer</span>
          <span className={styles.staticValue}>{props.timer}</span>
        </div>
        <div className={styles.staticItem}>
          <span>Clicked</span>
          <span className={styles.staticValue}>{props.clicks}</span>
        </div>
        <div className={styles.staticItem}>
          <span>Lives</span>
          <span className={styles.staticValue}>{props.lives}</span>
        </div>
        <div className={styles.staticItem}>
          <span>Level</span>
          <span className={styles.staticValue}>{props.level}</span>
        </div>
        {(props.status === "win" ||
          props.status === "init" ||
          props.status === "over") && (
          <button
            onClick={this.handleNewGameClick}
            className={styles.newGameBtn}
          >
            {props.status === "win" || props.level > 1 ? "Start" : "New Game"}
          </button>
        )}
      </div>
    );
  }
}

export default Statics;

Statics.defaultProps = {
  status: "init"
};

Statics.propTypes = {
  clicks: PropTypes.number.isRequired,
  lives: PropTypes.number.isRequired,
  timer: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  status: PropTypes.oneOf(["init", "new", "keep", "win", "over"]).isRequired,
  startTimer: PropTypes.func,
  buildNewGame: PropTypes.func
};
