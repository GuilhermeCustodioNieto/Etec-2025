import React from "react";
import styles from "./Semifinal.module.css";
import Scoreboard from "../Scoreboard/Scoreboard";

function Semifinal({ data, formatter }) {
  return (
    <div className={styles.semi_final}>
      <div className={styles.boxTitulo}>
                <div className={styles.box}>
                  <h2>2</h2>
                  <h3>Semifinal</h3>
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

export default Semifinal;
