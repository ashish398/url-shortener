import React from "react";
import dgraphLogo from "../assets/dgraphLogo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <a href='https://dgraph.io/'>
          {" "}
          <img class={styles.logo} src={dgraphLogo} alt='dgraph logo' />
        </a>
      </div>
      <div>
        <h1>Welcome to the URL Shortener Application</h1>
        <h4>-Powered by Slash Dgraph</h4>
      </div>
    </>
  );
};

export default Header;
