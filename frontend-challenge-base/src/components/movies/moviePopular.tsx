import MovieCard from "./movieCard";
import { MoviesSchema } from "../../app/schemas/movies/movies";
import styles from "../../app/css/Movie_Card.module.css";

type Props = {
  list: MoviesSchema[];
};
export const MoviePopular = ({ list }: Props) => {
  return (
    <div>
      <h1>Popular</h1>
      <div className={styles.list}>
        {list.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              title={movie.original_title}
              rating={movie.vote_average}
              isFavorite={false}
              poster={movie.backdrop_path}
            />
          );
        })}
      </div>
    </div>
  );
};
