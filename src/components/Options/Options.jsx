import css from "./Options.module.css";

export default function Options({good, neutral, bad, reset}) {
  return (
    <div>
      <button onClick={good}>Good</button>
      <button onClick={neutral}>Neutral</button>
      <button onClick={bad}>Bad</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
