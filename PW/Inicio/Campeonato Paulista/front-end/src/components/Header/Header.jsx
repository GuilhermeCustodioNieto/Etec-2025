import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <a href="/" id="logo">
        <img src="/public/Logo.png" alt="Logo" />
      </a>

      <h1>
        CAMPEONATO PAULISTA <span>2025</span>
      </h1>

      <div></div>
    </header>
  );
}

export default Header;
