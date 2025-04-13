import React from "react";
import styles from "./FirstFase.module.css";
import Leaderboard from "../Leaderboard/Leaderboard";

function FirstFase({ data }) {
  return (
    <div className={styles.first_fase} id="primeira-fase">
      <h2>Primeira Fase</h2>

      <div>
        {data.map((group, index) => {
          return (
            <Leaderboard
              group={`Grupo ${group.grupo}`}
              times={group.times}
              key={index}
            ></Leaderboard>
          );
        })}
      </div>
    </div>
  );
}

export default FirstFase;
