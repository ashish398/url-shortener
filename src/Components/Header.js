import React from "react";
import dgraphLogo from "../assets/dgraphLogo.png";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <span>
          <a href='https://dgraph.io/'>
            {" "}
            <img className={styles.logo} src={dgraphLogo} alt='dgraph logo' />
          </a>
        </span>
        <span>
          <h1>URL Shortener</h1>
        </span>
        <div className = {styles.subheader}>
          <h4>-Powered by Slash Dgraph</h4>
        </div>
      </div>
    </>
  );
};

export default Header;
