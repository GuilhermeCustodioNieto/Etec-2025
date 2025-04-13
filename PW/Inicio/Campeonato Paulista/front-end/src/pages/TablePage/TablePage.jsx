import React from "react";
import FirstFase from "../../components/FirstFase/FirstFase";
import styles from "./TablePage.module.css";

function TablePage() {
  return (
    <div>
      <header className={styles.header}>
        <h1>Campeonato Paulista</h1>
      </header>

      <div>
        <FirstFase></FirstFase>
      </div>
    </div>
  );
}

export default TablePage;
