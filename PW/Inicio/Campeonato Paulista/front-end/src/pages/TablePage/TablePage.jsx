import { React, useEffect } from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import FirstFase from "../../components/FirstFase/FirstFase";
import QuarterFinals from "../../components/QuarterFinals/QuarterFinals";

import styles from "./TablePage.module.css";
import Semifinal from "../../components/Semifinal/Semifinal";
import Final from "../../components/Final/Final";
import Footer from "../../components/Footer/Footer";
import Table from "../../services/Table.json";
import ScrollReveal from "scrollreveal";

function TablePage() {
  function formatTeams(jogo) {
    return {
      teamA: jogo.teams.teamA,
      teamB: jogo.teams.teamB,
    };
  }

  /**
   * useEffect(() => {
    const slideUp = {
      distance: "125%",
      origin: "bottom",
      opacity: null,
      reset: false,
    };

    ScrollReveal().reveal("h1, h2, h3, p, button, #button_banner", slideUp);
  }, []);
   */

  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <div className={styles.tables}>
        <FirstFase data={Table["primeira-fase"]}></FirstFase>
      </div>
      <div className={styles.tables1}>
        <QuarterFinals
          data={Table["quartas-de-final"]}
          formatter={formatTeams}
        ></QuarterFinals>
        <Semifinal
          data={Table["semi-final"]}
          formatter={formatTeams}
        ></Semifinal>
        <Final data={Table["final"]} formatter={formatTeams}></Final>
      </div>
        <div className={styles.winner}>
          <h3>
            Vencedor: <span>Corinthians</span>
          </h3>
        </div>
      <Footer></Footer>
    </div>
  );
}

export default TablePage;
