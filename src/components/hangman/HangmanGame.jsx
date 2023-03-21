import React from "react";
import Button from "react-bootstrap/Button";
import Quote from "../quote/Quote";
import Keyboard from "../keyboard/Keyboard";
import Hangman from "./Hangman";

import styles from './HangmanGame.module.css';

const HangmanGame = ({ restartGame, quitGame, selectLetter, letterPositions, quote, errors, tries }) => {
  return (
    <>
      <h1 className={styles['hangman-title']}>Hangman</h1>
      <section className={styles.hangman}>
        <Hangman tries={tries} errors={errors} />
        <Quote quote={quote} letterPositions={letterPositions} />
        <Keyboard selectLetter={selectLetter} />
      </section>
      <div className={styles['hangman-actions']}>
        <Button variant="secondary" className="restart" onClick={restartGame}>Restart the game!</Button>
        <Button variant="danger" className="quit" onClick={quitGame}>Exit the game!</Button>
      </div>
    </>
  );
};

export default HangmanGame;
