import React from "react";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <div className={styles.banner}>
      <div>
        <div>
          <p className={styles.titulo}>CAMPEONATO</p>
          <p className={styles.titulo}>PAULISTA</p>
        </div>
        <div>
          <p className={styles.subTitulo}>O Campeonato Paulista é um orgulho do esporte Brasileiro, um</p>
          <p className={styles.subTitulo}>dos mais antigos senão o for o primeiro campeonato</p>
          <p className={styles.subTitulo}>profissional de futebol desde de 1902</p>
        </div>
        <div className={styles.btn}>
          <p>Saiba Mais</p>
        </div>
      </div>
      <div>
        <img src="./public/jg1.png" alt="jogador" className={styles.img}/>
      </div>
    </div>
  );
}

export default Banner;
