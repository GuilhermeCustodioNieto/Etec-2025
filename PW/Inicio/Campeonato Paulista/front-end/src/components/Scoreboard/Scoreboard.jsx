import React from "react";
import styles from "./Scoreboard.module.css";

function Scoreboard({ teams }) {
  return (
    <div className={styles.scoreboard}>
      <p>
        {teams.teamA.name} {teams.teamA.score} X {teams.teamB.score}{" "}
        {teams.teamB.name}
      </p>
    </div>
  );
}

export default Scoreboard;
