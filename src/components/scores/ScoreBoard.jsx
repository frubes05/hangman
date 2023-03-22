import React from "react";
import Table from "react-bootstrap/Table";
import { advancedSort } from "../../utils/sortUtils";

import styles from './ScoreBoard.module.css';

const ScoreBoard = ({ highscores }) => {
  console.log(highscores);
  return (
    <Table className={styles.table} striped bordered variant="dark">
      <thead>
        <tr>
          <th></th>
          <th>User</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {advancedSort(highscores
          ?.map((data, i) => ({ ...data, score: 100 / (1 + data.errors) })))
          .sort((a, b) => b.score - a.score)
          .map((entry, i) => (
            <tr key={i}>
              <td>
                {i + 1}
                {"."}
              </td>
              <td>{entry.userName}</td>
              <td>{entry.score}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default ScoreBoard;
