import { useRef, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "./redux/reducers/nameReducer";
import {
  clearQuote,
  setQuote,
  setLetter,
  setErrorAttempts,
  setLetterPositions,
  clearErrorAttempts,
  clearLetterPositions,
  endGame,
  setHighScores,
  setUserScores,
  setTries
} from "./redux/reducers/quoteReducer";
import {
  ONLY_LETTERS_REGEX,
  QUOTE_GENERATOR_URL,
  FINISH_GAME_URL,
} from "./constants/constants";

import StartGame from "./components/StartGame";
import HangmanGame from "./components/hangman/HangmanGame";
import Scores from "./components/scores/Scores";
import LoadingSpinner from "./components/LoadingSpinner";
import useFetch from "./hooks/useFetch";

import { Container, Row, Col } from "react-bootstrap";
import GameOver from "./components/GameOver";

import styles from './App.module.css';

function App() {
  const [error, setError] = useState(null);
  const [restartGame, setRestartGame] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const nameRef = useRef();
  const firstLoad = useRef(true);
  const name = useSelector((state) => state.name);
  const quote = useSelector((state) => state.quote);
  const dispatch = useDispatch();

  const getQuoteData = useFetch({
    url: QUOTE_GENERATOR_URL,
    method: "get",
    onSuccess: (data) => {
      const content = data.content
        .split("")
        .map((char) => (ONLY_LETTERS_REGEX.test(char) ? char : ""))
        .filter((elem) => elem !== "");
      dispatch(
        setQuote({
          value: data.content,
          length: content.length,
          quoteId: data._id,
        })
      );
    },
    onError: (error) => setError(error.message),
    onInit: false,
  });

  const getHighScores = useFetch({
    url: FINISH_GAME_URL,
    method: "get",
    onSuccess: (data) => {
      dispatch(setHighScores({ highScores: data }));
    },
    onError: (error) => setError(error.message),
    onInit: false,
  });

  const sendUserScore = useFetch({
    url: FINISH_GAME_URL,
    method: "post",
    onSuccess: (data, status) => {
      if (status === 201) {
        handleFetchHighscores();
      }
    },
    onError: () => {},
    onInit: false,
  });

  useEffect(() => {
    if ((!isBeginning && firstLoad.current) || (restartGame && !isBeginning)) {
      getQuoteData.handleFetch(QUOTE_GENERATOR_URL);
      setRestartGame(false);
      firstLoad.current = false;
    }
  }, [restartGame, isBeginning]);

  useEffect(() => {
    if (quote.positions.length === quote.length && !isBeginning) {
      dispatch(endGame({ timestamp: Date.now() }));
      setIsFinished(true);
      handleFinishGame();
    }
  }, [quote.positions.length, quote.length]);

  useEffect(() => {
    if(quote.error === 6) {
      setIsGameOver(true);
    }
  }, [quote.error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(nameRef.current.value) {
      dispatch(setName({ value: nameRef.current.value }));
      setIsBeginning(false);
      setError(false);
    } else {
      setError('Please enter your name!')
    }
  };

  const handleRestartGame = () => {
    setRestartGame(true);
    setIsGameOver(false);
    dispatch(clearQuote());
    dispatch(clearErrorAttempts());
    dispatch(clearLetterPositions());
    if (isFinished) {
      setIsFinished(false);
    }
  };

  const handleQuitGame = () => {
    dispatch(clearErrorAttempts());
    dispatch(clearLetterPositions());
    setIsBeginning(true);
    setIsFinished(false);
    setIsGameOver(false);
    firstLoad.current = true;
  }

  const handleFinishGame = async () => {
    const gameData = {
      quoteId: quote.quoteId,
      length: quote.length,
      uniqueCharacters: Array.from(new Set(quote.positions)).length,
      userName: name.value,
      errors: quote.error,
      duration: Date.now() - quote.timestamp,
    };
    dispatch(setUserScores({ userScore: gameData }));
    sendUserScore.handleFetch(FINISH_GAME_URL, gameData, {
      headers: {
        "Content-type": "application/json",
      },
    });
  };

  const handleFetchHighscores = () =>
    getHighScores.handleFetch(FINISH_GAME_URL);

  const selectLetter = (letter) => {
    dispatch(setLetter({ value: letter }));
    dispatch(setTries({ tries: 1 }))
    !quote.value.toUpperCase().includes(letter.toUpperCase())
      ? dispatch(setErrorAttempts({ value: 1 }))
      : getAllLetterOccurences(letter);
  };

  const getAllLetterOccurences = (letter) => {
    const positions = quote.value
      .split("")
      .map((lett) => {
        if (letter.toUpperCase() === lett.toUpperCase()) {
          return lett;
        }
      })
      .filter((elem) => typeof elem === "string");
    dispatch(setLetterPositions({ value: positions }));
  };

  return (
    <Container>
      <Row>
        <Col md={12} sm={12}>
          <section className={styles.main}>
            {isBeginning && !isFinished && (
              <StartGame handleSubmit={handleSubmit} error={error} ref={nameRef} />
            )}
            {!isBeginning &&
              !isFinished &&
              getQuoteData.status === "Fullfilled" && (
                <HangmanGame
                  restartGame={handleRestartGame}
                  quitGame={handleQuitGame}
                  quote={quote.value}
                  selectLetter={selectLetter}
                  letterPositions={quote.positions}
                  errors={quote.error}
                  tries={quote.tries}
                />
              )}
            {isFinished &&
              quote.highScores &&
              getQuoteData.status === "Fullfilled" && (
                <Scores
                  highscores={[...quote.highScores, ...quote.userScores]}
                  playAgain={() => handleRestartGame()}
                  quitGame={handleQuitGame}
                />
              )}
            {isGameOver && <GameOver show={isGameOver} handleRestartGame={handleRestartGame} handleQuitGame={handleQuitGame}/>}
            {!isBeginning &&
              !isFinished &&
              getQuoteData.status === "Pending" && <LoadingSpinner />}
            {(getHighScores.status === "Pending" ||
              sendUserScore.status === "Pending") && <LoadingSpinner />}
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
