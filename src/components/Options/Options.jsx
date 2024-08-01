// import css from "./Options.module.css";

export default function Options({updateFeedback, totalFeedback, reset }) {
  return (
    <div>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback > 0  && (<button onClick={reset}>Reset</button>) }
    </div>
  );
}
