import React from "react";
import styles from "./Scoreboard.module.css";

function Scoreboard({ teams }) {
  return (
    <div className={styles.scoreboard}>
      <p className={styles.scoreboard_team_name}>{teams.teamA.name}</p>
      <p>{teams.teamA.score}</p>
      <p>X</p>
      <p>{teams.teamB.score}</p>
      <p className={styles.scoreboard_team_name}>{teams.teamB.name}</p>
    </div>
  );
}

export default Scoreboard;
