// import css from "./Feedback.module.css";

export default function Feedback({
  stats: { good, neutral, bad },
  totalFeedback,
}) {
  return (
    <div>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        {totalFeedback > 0 && (
          <>
            <li>Total: {totalFeedback}</li>
            <li>
              Positive: {Math.round(((good + neutral) / totalFeedback) * 100)}%
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
