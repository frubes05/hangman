import React from "react";
import { ONLY_LETTERS_REGEX } from "../../constants/constants";

import styles from './QuoteLetter.module.css';

const QuoteLetter = ({ letter, letterPositions }) => {
  const transformedLetter = letter.split("");
  const uniqueLetters = Array.from(
    new Set(letterPositions.map((elem) => elem.toUpperCase()))
  );

  return (
    <>
      {transformedLetter?.map((lett, i) => {
        return ONLY_LETTERS_REGEX.test(lett) ? (
          <span className={styles.letter} key={lett}>
            {uniqueLetters.find((char) => char === lett.toUpperCase())
              ? lett
              : ""}
          </span>
        ) : (
          lett
        );
      })}
    </>
  );
};

export default QuoteLetter;
