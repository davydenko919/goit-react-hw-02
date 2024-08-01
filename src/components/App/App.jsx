import Descrition from "../Descrition/Descrition.jsx";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import { useState } from "react";

export default function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateGood = () => {
    setValues({
      ...values,
      good: values.good + 1,
    });
  };
  const updateNeutral = () => {
    setValues({
      ...values,
      neutral: values.neutral + 1,
    });
  };
  const updateBad = () => {
    setValues({
      ...values,
      bad: values.bad + 1,
    });
  };

  const reset = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  // const updateFeedback = (feedbackType) => {
  //   setValues(prevFeedback => ({
  //     ...prevFeedback,
  //     [feedbackType]: prevFeedback[feedbackType] + 1
  //   }));
  // };

  return (
    <>
      <Descrition />

      <Options good={updateGood} neutral={updateNeutral} bad={updateBad} reset={reset} />

      <Feedback stats={values} />
    </>
  );
}
