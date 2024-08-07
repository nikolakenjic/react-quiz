import React from 'react';
import { useQuiz } from '../context/QuizContext';

const NextQuestion = () => {
  const { dispatch, answer, numOfQuestions, index } = useQuiz();

  if (answer === null) return null;

  if (index < numOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        Next
      </button>
    );

  if (index === numOfQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'finish' })}
      >
        Finish
      </button>
    );
};

export default NextQuestion;
