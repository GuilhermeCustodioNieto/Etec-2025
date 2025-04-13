import React from "react";
import styles from "./Banner.module.css";

function Banner() {
  return (
    <div className={styles.banner}>
      <p>
        Veja o melhor conteúdo sobre o futebol brasileiro sem preocupações com
        nosso site!
      </p>
      <a href="#primeira-fase">VER MAIS</a>
    </div>
  );
}

export default Banner;
