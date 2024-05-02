import styles from "../errorMessage.module.css";
function ErrorMessage({ message }) {
  return (
    <p className={styles.error}>
      <span>⛔</span>
      {message}
    </p>
  );
}
export default ErrorMessage;
