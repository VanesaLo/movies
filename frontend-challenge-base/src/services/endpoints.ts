const API_URL =
  process.env.NEXT_PUBLIC_API_MOVIE_URL || "https://api.themoviedb.org/3";

export const endpoints = {
  genres: {
    list: (params?: string) => `${API_URL}/genre/movie/list?${params}`,
  },
  popular: {
    list: (params?: string) => `${API_URL}/movie/popular?${params}`,
  },
  top_rated: {
    list: (params?: string) => `${API_URL}/movie/top_rated?${params}`,
  },
  now_playing: {
    list: (params?: string) => `${API_URL}/movie/now_playing?${params}`,
  },
};
