import { useCallback, useState } from "react";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question";

import QUESTIONS from "../questions";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleSelectedAnswer = useCallback((selectedAnswer) => {
    setUserAnswers((prev) => {
      return [...prev, selectedAnswer];
    });
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectedAnswer(null);
  }, [handleSelectedAnswer]);

  if (quizCompleted) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Quiz Completed" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        onSelect={handleSelectedAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
