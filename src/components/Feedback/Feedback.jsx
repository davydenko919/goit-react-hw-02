import css from "./Feedback.module.css";

export default function Feedback({
  stats: { good, neutral, bad },
  totalFeedback,
}) {
  return (
    <div>
      <ul>
        <li className={css.li}>Good: {good}</li>
        <li className={css.li}>Neutral: {neutral}</li>
        <li className={css.li}>Bad: {bad}</li>
        {totalFeedback > 0 && (
          <>
            <li className={css.li}>Total: {totalFeedback}</li>
            <li className={css.li}>
              Positive: {Math.round(((good + neutral) / totalFeedback) * 100)}%
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
