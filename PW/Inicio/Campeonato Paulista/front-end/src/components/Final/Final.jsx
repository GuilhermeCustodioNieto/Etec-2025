import React from "react";
import styles from "./Final.module.css";
import Scoreboard from "../Scoreboard/Scoreboard";

function Final() {
  return (
    <div className={styles.final}>
      <h2>Final</h2>

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

export default Final;
