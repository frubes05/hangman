import React from "react";

import styles from './Hangman.module.css';

const Hangman = ({ errors, tries }) => {
  return (
    <div className={`${styles['hangman-wrapper']} ${errors === 6 ? styles['hangman-error'] : ""}`}>
      <svg height="250" width="200" className="hangman-figure">
        <line x1="60" y1="20" x2="140" y2="20" stroke="black" />
        <line x1="140" y1="20" x2="140" y2="50" stroke="black" />
        <line x1="60" y1="20" x2="60" y2="230" stroke="black" />
        <line x1="20" y1="230" x2="100" y2="230" stroke="black" />

        {errors >= 1 && <circle cx="140" cy="70" r="20" stroke="black" />}
        {errors >= 2 && (
          <line x1="140" y1="90" x2="140" y2="150" stroke="black" />
        )}
        {errors >= 3 && (
          <line x1="140" y1="120" x2="120" y2="100" stroke="black" />
        )}
        {errors >= 4 && (
          <line x1="140" y1="120" x2="160" y2="100" stroke="black" />
        )}
        {errors >= 5 && (
          <line x1="140" y1="150" x2="120" y2="180" stroke="black" />
        )}
        {errors >= 6 && (
          <line x1="140" y1="150" x2="160" y2="180" stroke="black" />
        )}
      </svg>
      <div className={styles['hangman-errors']}>
        <h3>
          Tries: <b>{tries}</b>
        </h3>
        <h3>
          Errors: <b>{errors}</b>
        </h3>
      </div>
    </div>
  );
};

export default Hangman;
