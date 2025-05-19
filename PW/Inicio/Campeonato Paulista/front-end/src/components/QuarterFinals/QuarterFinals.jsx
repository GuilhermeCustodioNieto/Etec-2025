import React from "react";
import styles from "./QuarterFinals.module.css";
import Scoreboard from "../Scoreboard/Scoreboard";

function QuarterFinals({ data, formatter }) {
  return (
    <div className={styles.quarter_finals}>
      <div className={styles.boxTitulo}>
          <div className={styles.box}>
            <h2>4</h2>
            <h3>QUARTAS DE FINAL</h3>
          </div>
          <div>
            <img src="../public/detalhe.png" alt="detalhe" className={styles.img}/>
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

export default QuarterFinals;
