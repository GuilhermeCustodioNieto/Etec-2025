import React from "react";
import styles from "./Leaderboard.module.css";

function Leaderboard({ group, times }) {
  function calculatatePercentage(games, totalPoints) {
    let possiblePoints = games * 3;
    return (totalPoints / possiblePoints) * 100;
  }
  times.map((time) => {
    console.log(time);

    time.porcentagem = calculatatePercentage(
      time.jogos,
      time.pontuacao
    ).toFixed(0);
  });
  times = times.sort((a, b) => b.porcentagem - a.porcentagem);

  return (
    <div className={styles.leaderboard}>
      <h3 className={styles.titulo}>{group}</h3>
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
            <th className={styles.leaderboard_line_gray_column}>%</th>
          </tr>
        </thead>

        <tbody>
          {times.map((time, index) => {
            return (
              <tr className={styles.leaderboard_line} key={index}>
                <td>{time.classificacao}</td>
                <td className={styles.leaderboard_line_gray_column}>
                  {time.time}
                </td>
                <td>{time.pontuacao}</td>
                <td className={styles.leaderboard_line_gray_column}>
                  {time.jogos}
                </td>
                <td>{time.vitorias}</td>
                <td className={styles.leaderboard_line_gray_column}>
                  {time.empates}
                </td>
                <td>{time.derrotas}</td>
                <td className={styles.leaderboard_line_gray_column}>
                  {time.porcentagem} %
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
