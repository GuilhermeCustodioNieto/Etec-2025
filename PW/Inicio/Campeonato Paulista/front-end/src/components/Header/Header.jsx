import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navHeader}>
        <a href="/" className={styles.navItem}>Home</a>
        <a href="/" className={styles.navItem}>Tabela de Pontos</a>
        <a href="/" className={styles.navItem}>Semi-Final</a>
        <a href="/" className={styles.navItem}>Final</a>
      </nav>

    </header>
  );
}

export default Header;
