import React from "react";
import styles from "./FirstFase.module.css";
import Leaderboard from "../Leaderboard/Leaderboard";

function FirstFase() {
  return (
    <div className={styles.first_fase} id="primeira-fase">
      <h2>Primeira Fase</h2>

      <div>
        <Leaderboard group="Grupo A"></Leaderboard>
        <Leaderboard group="Grupo B"></Leaderboard>
        <Leaderboard group="Grupo C"></Leaderboard>
        <Leaderboard group="Grupo D"></Leaderboard>
      </div>
    </div>
  );
}

export default FirstFase;
