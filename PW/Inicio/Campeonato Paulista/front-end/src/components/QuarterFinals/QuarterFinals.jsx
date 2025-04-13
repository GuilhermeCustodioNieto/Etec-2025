import React from "react";
import styles from "./QuarterFinals.module.css";
import Scoreboard from "../Scoreboard/Scoreboard";

function QuarterFinals() {
  return (
    <div className={styles.quarter_finals}>
      <h2>Quartas de Final</h2>

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

export default QuarterFinals;
