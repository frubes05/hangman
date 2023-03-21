import React from "react";
import { KEYBOARD_LETTERS } from "../../constants/constants";
import KeyboardButton from "./KeyboardButton";

import styles from './Keyboard.module.css';

const Keyboard = ({ selectLetter }) => {
  const handleClick = (letter, i) => {
    selectLetter(letter);
  }

  return (
    <ul className={styles.keyboard}>
      {KEYBOARD_LETTERS.map((letter, i) => (
        <KeyboardButton key={i} handleClick={handleClick} letter={letter} />
      ))}
    </ul>
  );
};

export default Keyboard;
