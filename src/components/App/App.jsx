import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Notification from "../Notification/Notification.jsx";
import { useState, useEffect } from "react";
import css from "./App.module.css";

export default function App() {
  const [values, setValues] = useState(() => {
    const savedValues = localStorage.getItem("valuesCount");
    return savedValues
      ? JSON.parse(savedValues)
      : { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = values.good + values.neutral + values.bad;

  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setValues((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const reset = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("valuesCount", JSON.stringify(values));
  }, [values]);

  return (
    <div className={css.div}>
      <Description />

      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        reset={reset}
      />

      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback stats={values} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />
      )}
    </div>
  );
}
