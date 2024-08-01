import Descrition from "../Descrition/Descrition.jsx";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Notification from "../Notification/Notification.jsx";
import { useState } from "react";

export default function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // const [totalFeedback, setTotalFeedback] = useState({
  //   values.good + values.neutral + values.bad});

  const totalFeedback = values.good + values.neutral + values.bad;

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

  return (
    <>
      <Descrition />

      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} reset={reset} />

      {totalFeedback === 0 && <Notification />}
      {totalFeedback > 0 && <Feedback stats={values} totalFeedback={totalFeedback} />}
    </>
  );
}
