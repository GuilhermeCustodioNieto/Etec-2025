import React from "react";
import styles from "./Semifinal.module.css";
import Scoreboard from "../Scoreboard/Scoreboard";

function Semifinal({ data, formatter }) {
  return (
    <div className={styles.semi_final}>
      <h2>SemiFinal</h2>

      <div>
        {data.map((jogo, index) => {
          return <Scoreboard teams={formatter(jogo)} key={index}></Scoreboard>;
        })}
      </div>
    </div>
  );
}

export default Semifinal;
