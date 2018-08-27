import React from "react";
import PropTypes from "prop-types";
import { css } from "react-emotion";
import PuzzleCard from "./PuzzleCard";
import Statics from "./Statics";
import DisplayLevelStatus from "./DisplayLevelStatus";

const styles = {
  root: css`
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 60px;
    label: home-root;
  `,
  puzzlesContainer: css`
    display: grid;
    position: relative;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 50px);
    grid-gap: 10px;
    background: #bbada0;
    border-radius: 6px;
    margin-top: 10px;
    padding: 12px;
    justify-content: space-between;
    box-sizing: border-box;
    @media (max-width: 640px) {
      grid-template-rows: repeat(10, 35px);
      grid-template-columns: repeat(10, 35px);
      padding: 5px;
      grid-gap: 5px;
      margin-top: 50px;
    }
    @media (max-width: 460px) {
      grid-template-rows: repeat(10, 34px);
      grid-template-columns: repeat(10, 1fr);
      padding: 5px;
      grid-gap: 1px;
      margin-top: 50px;
    }
    label: puzzles-container;
  `
};

class HomePage extends React.Component {
  componentDidMount() {
    const cachedLevel = localStorage.getItem("levelNumber");
    const cachedLives = localStorage.getItem("lives");
    if (cachedLevel) this.props.changeLevelNumber(parseInt(cachedLevel, 10));
    if (cachedLives) this.props.changeUserLives(parseInt(cachedLives, 10));
  }

  handleNewGameClick = () => {
    this.props.startTimer();
    this.props.buildNewGame();
  };

  handlePuzzleClick = id => {
    this.props.updateBoard(
      id,
      this.props.levelInfo.levelStatus,
      this.props.levelInfo.levelNumber
    );
  };

  handleLevelSelectChange = event => {
    this.props.startTimer();
    this.props.buildNewGame(event.target.value);
  };

  render() {
    const props = this.props;
    const { items, levelInfo } = props;
    const numberOfSelected = items.filter(s => s === "selected").length;
    return (
      <div className={styles.root}>
        <Statics
          onNewGameClick={this.handleNewGameClick}
          status={levelInfo.levelStatus}
          clicks={props.clickedLeft}
          lives={levelInfo.lives}
          timer={levelInfo.timer}
          level={levelInfo.levelNumber}
        />
        <div className={styles.puzzlesContainer}>
          <DisplayLevelStatus
            level={levelInfo.levelNumber}
            status={levelInfo.levelStatus}
            onLevelChange={this.handleLevelSelectChange}
          />
          {items.map((item, index) => {
            return (
              <PuzzleCard
                onClick={() => this.handlePuzzleClick(index + 1, item)}
                status={item}
                key={`puzzule-card-${index}`}
                disabled={numberOfSelected > 0}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default HomePage;

HomePage.propTypes = {
  items: PropTypes.array,
  levelInfo: PropTypes.object,
  clickedLeft: PropTypes.number,
  selectedCells: PropTypes.array
};
