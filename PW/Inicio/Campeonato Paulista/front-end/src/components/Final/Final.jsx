import React from "react";
import styles from "./Final.module.css";
import Scoreboard from "../Scoreboard/Scoreboard";

function Final({ data, formatter }) {
  return (
    <div className={styles.final}>
      <div className={styles.boxTitulo}>
                <div className={styles.box}>
                  <h2>Final</h2>
                </div>
            </div>

      <div>
        {data.map((jogo, index) => {
          return <Scoreboard teams={formatter(jogo)} key={index}></Scoreboard>;
        })}
      </div>
    </div>
  );
}

export default Final;
