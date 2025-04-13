import React from "react";
import styles from "./Semifinal.module.css";
import Scoreboard from "../Scoreboard/Scoreboard";

function Semifinal() {
  return (
    <div className={styles.semi_final}>
      <h2>SemiFinal</h2>

      <div>
        <Scoreboard
          teams={{
            teamA: { name: "Corinthians", score: 3 },
            teamB: { name: "Mirassol", score: 0 },
          }}
        ></Scoreboard>
      </div>
    </div>
  );
}

export default Semifinal;
