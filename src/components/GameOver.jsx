import React from "react";
import {Modal, Button} from "react-bootstrap";

const GameOver = ({ show, handleRestartGame, handleQuitGame }) => {
  return (
    <Modal show={show} centered>
      <Modal.Header>
        <Modal.Title>Unfortunately, You lost!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Choose next action</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleRestartGame}>
          Try again!
        </Button>
        <Button variant="primary" onClick={handleQuitGame}>
          Quit game!
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default GameOver;
