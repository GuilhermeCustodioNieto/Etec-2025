import React from "react";
import styles from "./FirstFase.module.css";

function FirstFase() {
  return (
    <div className={styles.first_fase_container}>
      <h2>Primeira Fase</h2>

      <div>
        <h3>GRUPO A</h3>
        <table>
          <tr>
            <th>Classificação</th>
            <th>Time</th>
            <th>P</th>
            <th>J</th>
            <th>V</th>
            <th>E</th>
            <th>D</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Corinthians</td>
            <td>27</td>
            <td>12</td>
            <td>8</td>
            <td>3</td>
            <td>1</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default FirstFase;
