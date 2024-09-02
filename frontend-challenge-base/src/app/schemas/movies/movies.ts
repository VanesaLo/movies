import * as Yup from "yup";

export const MoviesSchema = Yup.object({
  adult: Yup.boolean(),
  backdrop_path: Yup.string(),
  genre_ids: Yup.array(),
  id: Yup.number(),
  original_language: Yup.string(),
  original_title: Yup.string(),
  overview: Yup.string(),
  popularity: Yup.number(),
  poster_path: Yup.string(),
  release_date: Yup.string(),
  title: Yup.string(),
  video: Yup.boolean(),
  vote_average: Yup.number(),
  vote_count: Yup.number(),
});
