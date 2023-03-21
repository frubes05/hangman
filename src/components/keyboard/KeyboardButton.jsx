import React, { useState } from "react";
import Button from "react-bootstrap/Button";

import styles from './KeyboardButton.module.css';

const KeyboardButton = ({ handleClick, letter }) => {
  const [disabled, setDisabled] = useState(false);
  return (
    <li className={styles['keyboard-letter']} key={letter}>
      <Button
        onClick={() => {
            handleClick(letter);
            setDisabled(true);
        }}
        variant="dark"
        disabled={disabled}
      >
        {letter}
      </Button>
    </li>
  );
};

export default KeyboardButton;
