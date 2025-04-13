import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="/">
        <img src="/public/Logo.png" alt="Logo" />
      </a>

      <div className={styles.footer_links}>
        <div>
          <h3>Veja:</h3>

          <div>
            <a href="https://github.com/GuilhermeCustodioNieto/GL-Crypto">
              GL-Crypto
            </a>
            <a href="https://github.com/GuilhermeCustodioNieto/Etec-2024/tree/main/PW/Arquitetura%20de%20Software/Noticias-2.0/project">
              Notícias-GL
            </a>
            <a href="https://github.com/GuilhermeCustodioNieto/etec-2023/tree/main/Programacao-Web/NFT/NFT">
              GL-NFT
            </a>
          </div>
        </div>

        <div>
          <h3>Sobre Nós:</h3>

          <div>
            <a href="https://www.instagram.com/lucas.caribe_/">
              Lucas Caribé Araújo
            </a>
            <a href="https://www.linkedin.com/in/guilherme-cust%C3%B3dio-nieto/">
              Guilherme Custódio Nieto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
