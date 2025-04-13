import React from "react";
import styles from "./Leaderboard.module.css";

function Leaderboard({ group }) {
  return (
    <div className={styles.leaderboard}>
      <h3>{group}</h3>
      <table>
        <thead>
          <tr className={styles.leaderboard_line}>
            <th></th>
            <th className={styles.leaderboard_line_gray_column}>Time</th>
            <th>P</th>
            <th className={styles.leaderboard_line_gray_column}>J</th>
            <th>V</th>
            <th className={styles.leaderboard_line_gray_column}>E</th>
            <th>D</th>
          </tr>
        </thead>

        {/* {data.map((time) => {
          return (
            <tr>
              <td>{time.classificacao}</td>
              <td>{}</td>
            </tr>
          );
        })} */}

        <tbody>
          <tr className={styles.leaderboard_line}>
            <td>1</td>
            <td className={styles.leaderboard_line_gray_column}>Corinthians</td>
            <td>28</td>
            <td className={styles.leaderboard_line_gray_column}>28</td>
            <td>17</td>
            <td className={styles.leaderboard_line_gray_column}>6</td>
            <td>0</td>
          </tr>
          <tr className={styles.leaderboard_line}>
            <td>1</td>
            <td className={styles.leaderboard_line_gray_column}>Corinthians</td>
            <td>28</td>
            <td className={styles.leaderboard_line_gray_column}>28</td>
            <td>17</td>
            <td className={styles.leaderboard_line_gray_column}>6</td>
            <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
