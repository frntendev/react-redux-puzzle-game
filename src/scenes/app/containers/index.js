import React from "react";
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { css } from "react-emotion";
import Home from "../../home/containers/homePageContainer";
import Header from "../components/Header";
import NoMatch from "../components/NoMatch";

const styles = {
  container: css`
    max-width: 630px;
    margin: 0 auto;
    label: container;
    @media (max-width: 640px) {
      max-width: 430px;
      padding: 10px;
      box-sizing: border-box;
    }
  `
};

const App = () => (
  <div>
    <Header />
    <main className={styles.container}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </main>
  </div>
);

export default withRouter(App);
