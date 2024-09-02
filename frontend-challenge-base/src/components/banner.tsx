import styles from "../app/css/Banner.module.css";

export const Banner = () => {
  return (
    <div className={styles.card}>
      <div className={styles.overlay}>
        <div className={styles.title}>Kung Fu Panda 4</div>
        <div className={styles.descriptionContainer}>
          <div className={styles.description}>
            Join Po and the Furious Five on a new epic adventure! Discover the
            power of friendship and the strength within! Get ready to unleash
            your inner warrior! 🐼✨
          </div>
          <div className={styles.ratingContainer}>
            <span className={styles.rating}>97%</span>
          </div>
          <div className={styles.actions}>
            <span className={styles.heart}>🤍</span>
          </div>
        </div>
      </div>
    </div>
  );
};
