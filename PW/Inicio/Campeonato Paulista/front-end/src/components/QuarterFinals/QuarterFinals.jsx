import React from "react";
import styles from "./QuarterFinals.module.css";
import Scoreboard from "../Scoreboard/Scoreboard";

function QuarterFinals({ data, formatter }) {
  return (
    <div className={styles.quarter_finals}>
      <h2>Quartas de Final</h2>

      <div>
        {data.map((jogo, index) => {
          return <Scoreboard teams={formatter(jogo)} key={index}></Scoreboard>;
        })}
      </div>
    </div>
  );
}

export default QuarterFinals;
