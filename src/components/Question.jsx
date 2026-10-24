import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

import QUESTIONS from "../questions";

export default function Question({
  key,

  onSelect,
  onSkipAnswer,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  const handleSelectedAnswer = (answer) => {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[key].answers[0] === answer,
      });

      setTimeout(() => {
        onSelect(answer);
      }, 2000);
    }, 1000);
  };

  let answerState = "";
  if (answer.selectedAnswer) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  }

  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />

      <h2>{QUESTIONS[key].text}</h2>

      <Answers
        answers={QUESTIONS[key].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectedAnswer}
      />
    </div>
  );
}
