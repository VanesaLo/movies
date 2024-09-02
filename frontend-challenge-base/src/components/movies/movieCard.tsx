import styles from "../../app/css/Movie_Card.module.css";
const MovieCard = ({ title, poster, rating, isFavorite }) => {
  return (
    <div className={styles.card}>
      <img src={poster} alt={`${title} poster`} className={styles.poster} />
      <div className={styles.movieInfo}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.details}>
          <span className={styles.rating}>{rating}</span>
          {/* <span className={`favorite-icon ${isFavorite ? 'favorite' : ''}`}>&#9829;</span> */}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
