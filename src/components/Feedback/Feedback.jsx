import css from "./Feedback.module.css";

export default function Feedback({stats: {
    good,
    neutral,
    bad
}}) {
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
      </ul>
    </div>
  );
}

{
  /* <button onClick={}></button> */
}
