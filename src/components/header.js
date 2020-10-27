import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./header.module.css";

const Header = ({ header }) => (
  <CSSTransition in={true} appear timeout={500} classNames={styles}>
    <h1 className={styles.header}>{header}</h1>
  </CSSTransition>
);

export default Header;
