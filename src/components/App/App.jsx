import Descrition from '../Descrition/Descrition.jsx';
import Options from '../Options/Options.jsx';
import Feedback from '../Feedback/Feedback.jsx';
import { useState } from 'react';

export default function App() {

  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
 
  return (
    <>
      <Descrition />

      <Options />

      <Feedback stats={values} />
    </>
  );
}
