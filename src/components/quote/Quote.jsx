import React from "react";
import QuoteWord from "./QuoteWord";

import styles from './Quote.module.css';

const Quote = ({ quote, letterPositions }) => {
  return (
    <div className={styles.quote}>
      {quote?.split(" ").map((word, i) => (
        <span className={styles.word} key={i}>
          <QuoteWord letterPositions={letterPositions} word={word} />
        </span>
      ))}
    </div>
  );
};

export default Quote;
