import React from 'react';
import ScoreBoard from './ScoreBoard';
import Button from "react-bootstrap/Button";

import styles from './Scores.module.css';

const Scores = ({ highscores, playAgain, quitGame }) => {
  return (
    <article className={styles.scores}>
        <h2 className={styles['scores-title']}> Results</h2>
        <ScoreBoard highscores={highscores}/>
        <div className={styles['scores-actions']}>
        <Button variant="secondary" className="restart" onClick={playAgain}>Restart the game!</Button>
        <Button variant="danger" className="quit" onClick={quitGame}>Exit the game!</Button>
      </div>
    </article>
  )
}

export default Scores