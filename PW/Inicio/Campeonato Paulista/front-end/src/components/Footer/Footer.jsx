import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.alinhamentoColuna}>
        <h2>Lucas Caribé Araújo</h2>
        <div className={styles.alinhamento}>
          <a href="https://github.com/LucasCaribeAraujo"><img src="../public/instagram.png" alt="" className={styles.icon}/></a>
          <a href="https://github.com/LucasCaribeAraujo"><img src="../public/github.png" alt="" className={styles.icon}/></a>
          <a href="https://github.com/LucasCaribeAraujo"><img src="../public/linkedin.png" alt="" className={styles.icon}/></a>
        </div>
      </div>
      <div>
        <p>Desenvolvido por Guilherme e Lucas &copy;</p>
      </div>
      <div className={styles.alinhamentoColuna}>
        <h2>Guilherme Custodio Nieto</h2>
        <div className={styles.alinhamento}>
          <a href="https://github.com/GuilhermeCustodioNieto"><img src="../public/instagram.png" alt="" className={styles.icon}/></a>
          <a href="https://github.com/GuilhermeCustodioNieto"><img src="../public/github.png" alt="" className={styles.icon}/></a>
          <a href="https://github.com/GuilhermeCustodioNieto"><img src="../public/linkedin.png" alt="" className={styles.icon}/></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
