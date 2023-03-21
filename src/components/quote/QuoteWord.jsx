import React from 'react';
import QuoteLetter from './QuoteLetter';

const QuoteWord = ({word, letterPositions}) => {
  return (
    <>{word.split('').map((letter, i) => <QuoteLetter key={i} letter={letter} letterPositions={letterPositions} />)}</>
  )
}

export default QuoteWord