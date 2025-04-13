import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import FirstFase from "../../components/FirstFase/FirstFase";
import QuarterFinals from "../../components/QuarterFinals/QuarterFinals";
//import FirstFase from "../../components/FirstFase/FirstFase";
import styles from "./TablePage.module.css";
import Semifinal from "../../components/Semifinal/Semifinal";
import Final from "../../components/Final/Final";
import Footer from "../../components/Footer/Footer";
import Table from "../../services/Table.json";

function TablePage() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <div className={styles.tables}>
        <FirstFase data={Table["primeira-fase"]}></FirstFase>
        <QuarterFinals></QuarterFinals>
        <Semifinal></Semifinal>
        <Final></Final>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default TablePage;
