import { Header } from "@/components/header";
import RootLayout from "./layout";
import { Banner } from "@/components/banner";
import { SideBar } from "@/components/sideBar";
import { getGenres } from "@/api/movies/genres";
import { getPopular } from "@/api/movies/popular";
import { MoviePopular } from "@/components/movies/moviePopular";
import { MovieNowPlaying } from "@/components/movies/movieNowPlaying";
import { MovieTopRated } from "@/components/movies/movieTopRated";
import styles from "./css/Movie_Card.module.css";
import { getNowPlaying } from "@/api/movies/now-playing";
import { getTopRated } from "@/api/movies/top-rated";

export const metadata = {
  title: "Quickbet Movies",
};
export default async function Home({ searchParams }: { searchParams: string }) {
  const queryString = Object.keys(searchParams)
    .map((key) => `${key}=${encodeURIComponent(searchParams[key as any])}`)
    .join("&");
  const genres = await getGenres();
  const popular = await getPopular();
  const nowPlaying = await getNowPlaying();
  const rated = await getTopRated();
  return (
    <RootLayout>
      <Header />
      <Banner />
      <div className={styles.categorySection}>
        <SideBar options={genres.genres} />
        <div className={styles.moviesContainer}>
          <MoviePopular list={popular.results} />
          <MovieNowPlaying list={nowPlaying.results} />
          <MovieTopRated list={rated.results} />
        </div>
      </div>
    </RootLayout>
  );
}
