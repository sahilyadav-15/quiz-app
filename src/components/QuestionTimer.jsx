import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timeoutId = setTimeout(onTimeout, timeout);
    return () => clearTimeout(timeoutId);
  }, [onTimeout, timeout]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prev) => prev - 100);
    }, 100);
    return () => clearInterval(intervalId);
  }, []);

  return <progress id="question-timer" max={timeout} value={remainingTime} />;
}
