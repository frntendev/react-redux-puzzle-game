import React from "react";
import { NavLink } from "react-router-dom";
import { css } from "react-emotion";

const styles = {
  header: css`
    background: #8f7a66;
    height: 50px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    position: fixed;
    width: 100%;
    z-index: 9;
    label: header;
  `,
  nav: css`
    max-width: 630px;
    height: inherit;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 150px auto;
    grid-gap: 5px;
    align-items: center;
    label: nav;
    @media (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  `,
  link: css`
    height: inherit;
    line-height: 50px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    background: #685747;
    -webkit-transition: 0.3s all ease;
    transition: 0.3s all ease;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    font-weight: bold;
    label: link;
    &:hover {
      background: #473b31;
    }
  `,
  badge: css`
    min-width: 20px;
    height: 20px;
    position: absolute;
    top: 5px;
    right: 8px;
    border-radius: 10px;
    background: #ffda26;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1c80d0;
    transition: 0.3s all ease;
    label: badge;
  `,
  adding: css`
    background: #65ff26;
    transform: scale(1.2);
  `,
  active: css`
    && {
      background: #473b31;
    }
  `
};
const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink
          activeClassName={styles.active}
          exact
          className={styles.link}
          to="/"
        >
          Puzzle Game
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
